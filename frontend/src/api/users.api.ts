import axios from 'axios';

export const getBroker = async (): Promise<unknown | undefined> => {
  try {
    const response = await axios.get(`/api/users?userTypes=broker&limit=20&pageNo=1`);
    return response;
  } catch (e: any) {
    throw new Error(e);
  }
};
