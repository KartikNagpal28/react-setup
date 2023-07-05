import axios from 'axios';

export const BusinessUserDetail = async (): Promise<unknown | undefined> => {
  try {
    const response = await axios.get(`/api/users/me`);
    return response;
  } catch (err: any) {
    throw err.response;
  }
};

export const updateBusinessProfile = async (data: any): Promise<unknown | undefined> => {
  try {
    const response = await axios.patch(`api/users/me`, data);
    return response;
  } catch (e: any) {
    throw new Error(e);
  }
};
