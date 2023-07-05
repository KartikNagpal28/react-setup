import { useEffect, useRef } from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';
import { BookingStateProps } from '@app/interfaces/BuilderBooking';

import styles from './Booking.module.css';
import { AddressV2 } from '@app/interfaces/Address';

const JobLocation = ({ setIsDisabled, bookingState: { booking, setBooking } }: BookingStateProps) => {
  useEffect(() => setIsDisabled(() => !booking.address), []);
  const inputRef = useRef<google.maps.places.SearchBox | null>(null);

  const loadPlaces = (searchBox: google.maps.places.SearchBox) => {
    inputRef.current = searchBox;
  };

  // ADDRESS LOGIC NEEDS TO BE UPDATED
  const placeChangeHandler = () => {
    const addressArr = inputRef.current?.getPlaces();
    if (!addressArr?.length) {
      return;
    }
    const address = new AddressV2(addressArr[0]);
    setBooking((state) => ({ ...state, address: address }));
    setIsDisabled(() => false);
  };

  return (
    <div className="flex flex-col gap-3">
      <span className={`${styles['qsn-heading']}`}>Where is this job located?</span>
      <span className={`${styles['qsn-subheading']} mb-5`}>Multiple locations? Just add a general area here.</span>

      <StandaloneSearchBox onLoad={loadPlaces} onPlacesChanged={placeChangeHandler}>
        <input
          className={styles['input-with-prefix']}
          type="text"
          placeholder="Enter the address here..."
          onChange={() => setIsDisabled(() => true)}
          defaultValue={booking.address?.fullAddress}
        />
      </StandaloneSearchBox>
    </div>
  );
};

export default JobLocation;
