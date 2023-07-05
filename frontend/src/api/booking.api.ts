import axios from 'axios';
import { BookingDetails } from '@app/interfaces/BuilderBooking';

export const createBooking = async (payload: BookingDetails): Promise<BookingDetails> => {
  try {
    const response = await axios.post<unknown, BookingDetails>('api/builders/bookings', payload);
    return response;
  } catch (err: any) {
    throw new Error(err);
  }
};
