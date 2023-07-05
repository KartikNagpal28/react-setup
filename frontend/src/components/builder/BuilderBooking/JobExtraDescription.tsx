import { ChangeEvent, useEffect } from 'react';
import { BookingStateProps } from '@app/interfaces/BuilderBooking';
import { TextArea } from '@app/components/common/inputs/Input/Input';

import styles from './Booking.module.css';

const JobExtraDescription = ({ setIsDisabled, bookingState: { booking, setBooking } }: BookingStateProps) => {
  useEffect(() => setIsDisabled(() => !booking.jobExtraInfo), []);
  const textChangeHandler = ({ target: { value: jobExtraInfo } }: ChangeEvent<HTMLTextAreaElement>) => {
    setBooking((state) => ({ ...state, jobExtraInfo }));
    if (jobExtraInfo.length) {
      setIsDisabled(() => false);
    } else {
      setIsDisabled(() => true);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <span className={`${styles['qsn-heading']}`}>Anything else we should know?</span>
      <span className={`${styles['qsn-subheading']} mb-5`}>
        Tools needed? Specific clothing/shoes needed? Add it here.
      </span>

      <TextArea
        rows={2}
        placeholder="Feel free to enter specific details here..."
        onChange={textChangeHandler}
        value={booking.jobExtraInfo}
      />
    </div>
  );
};

export default JobExtraDescription;
