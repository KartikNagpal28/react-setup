import { useEffect, useState } from 'react';

import { BookingStateProps, JobTypes } from '@app/interfaces/BuilderBooking';
import { JobTypesEnum } from '@app/constants/enums/job-types.enum';
import { Button } from '@app/components/common/buttons/Button/Button';

import styles from './Booking.module.css';

const JobType = ({ setIsDisabled, bookingState: { booking, setBooking } }: BookingStateProps) => {
  useEffect(
    () =>
      setIsDisabled(() => {
        if (booking.jobType) {
          jobTypeHandler(booking.jobType);
        }
        return !booking.jobType;
      }),
    [],
  );

  const jobTypes: JobTypes = {
    [JobTypesEnum.FULL_TIME]: 'Full Time',
    [JobTypesEnum.PART_TIME]: 'Part Time',
    [JobTypesEnum.TEMPORARY]: 'Project / Temporary',
  };

  const [jobType, setJobType] = useState<JobTypesEnum | null>(null);

  const jobTypeHandler = (val: JobTypesEnum) => {
    setJobType(val);
    setBooking((state) => ({ ...state, jobType: val }));
    setIsDisabled(() => false);
  };

  return (
    <div className="flex flex-col gap-3">
      <span className={`${styles['qsn-heading']} mb-12`}>What type of job is this?</span>

      {Object.entries(jobTypes).map(([key, val]) => (
        <Button
          key={key}
          className={`!rounded-full !justify-start bg-[#EAECF0] ${key === jobType ? styles['job-selected'] : ''}`}
          onClick={jobTypeHandler.bind(undefined, key as JobTypesEnum)}
        >
          {val}
        </Button>
      ))}
    </div>
  );
};

export default JobType;
