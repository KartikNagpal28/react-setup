/* eslint-disable @typescript-eslint/no-explicit-any */
import { AvailableLocations, BuilderDetail, BuilderFilters } from '@app/interfaces';
import axios from 'axios';

export const getAllBuilders = async (data: BuilderFilters) => {
  try {
    const response = await axios.post<{ builders: BuilderDetail[] }>(`api/builders`, data);
    return response;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getAllCities = async () => {
  try {
    const response = await axios.get<{ cities: AvailableLocations[] }>(`/api/addresses/builder-available-cities`);
    return response;
  } catch (err: any) {
    throw err.response;
  }
};
