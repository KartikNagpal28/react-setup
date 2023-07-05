import { DatePicker } from 'antd';
import { useEffect } from 'react';
import moment, { Moment } from 'moment';
import { RangeValue } from 'rc-picker/lib/interface';
import { BookingStateProps } from '@app/interfaces/BuilderBooking';

import styles from './Booking.module.css';

const BookingCalendar = ({ builderName, setIsDisabled, bookingState: { booking, setBooking } }: BookingStateProps) => {
  useEffect(() => setIsDisabled(() => !booking.bookFrom && !booking.bookTo), []);
  const { RangePicker } = DatePicker;

  const dateRangeHandler = (date: RangeValue<Moment>) => {
    if (!date?.length) {
      return;
    }
    const bookFrom = moment(date[0]).toISOString();
    const bookTo = moment(date[1]).toISOString();
    setBooking((state) => ({ ...state, bookFrom, bookTo }));
    setIsDisabled(() => false);
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <span className={styles['qsn-heading']}>When would you like to book {builderName}?</span>
      <span className={`${styles['qsn-subheading']} mb-6`}>Choose the dates below. </span>

      <RangePicker
        className={styles['custom-date-picker']}
        popupClassName={styles['custom-date-picker']}
        onChange={dateRangeHandler}
        value={booking.bookFrom && booking.bookTo ? [moment(booking.bookFrom), moment(booking.bookTo)] : [null, null]}
      />
    </div>
  );
};

export default BookingCalendar;
