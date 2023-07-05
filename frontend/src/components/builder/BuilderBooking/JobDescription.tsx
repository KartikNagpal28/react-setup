import { ChangeEvent, useEffect } from 'react';
import { BookingStateProps } from '@app/interfaces/BuilderBooking';
import { TextArea } from '@app/components/common/inputs/Input/Input';

import styles from './Booking.module.css';

const JobDescription = ({ builderName, setIsDisabled, bookingState: { booking, setBooking } }: BookingStateProps) => {
  useEffect(() => setIsDisabled(() => !booking.jobDescription), []);
  const textChangeHandler = ({ target: { value: jobDescription } }: ChangeEvent<HTMLTextAreaElement>) => {
    setBooking((state) => ({ ...state, jobDescription }));
    if (jobDescription.length) {
      setIsDisabled(() => false);
    } else {
      setIsDisabled(() => true);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <span className={`${styles['qsn-heading']} mb-7`}>What would like {builderName} to do?</span>

      <TextArea
        rows={2}
        placeholder="Feel free to enter different task or specific details about what you need..."
        onChange={textChangeHandler}
        value={booking.jobDescription}
      />
    </div>
  );
};

export default JobDescription;
