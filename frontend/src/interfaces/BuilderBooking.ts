import { Dispatch, SetStateAction } from 'react';
import { BuilderDetail } from './Builder';
import { JobTypesEnum } from '@app/constants/enums/job-types.enum';
import { AddressV2 } from './Address';

export interface BuilderBookingProps {
  isBookingInitiated: boolean;
  setBookingInitiated: (isOpen: boolean) => void;
  builderDetail: BuilderDetail;
}

export type JobTypes = { [k in JobTypesEnum]: string };
export type SetBooking = Dispatch<SetStateAction<BookingDetails>>;

export type SetIsDisabled = Dispatch<SetStateAction<boolean>>;

export interface BookingStateProps {
  bookingState: {
    booking: BookingDetails;
    setBooking: SetBooking;
  };
  builderName?: string;
  setIsDisabled: SetIsDisabled;
}

export class BookingDetails {
  constructor(
    public businessId = 0,
    public builderId = 0,
    public jobType?: JobTypesEnum,
    public bookFrom?: string,
    public bookTo?: string,
    public jobDescription?: string,
    public address?: AddressV2,
    public jobExtraInfo?: string,
  ) {}
}
