import axios from 'axios';

export const registerUser = async (data: any) => {
  try {
    const res = await axios.post(`/api/users/register`, data);
    return res;
  } catch (err: any) {
    throw err.response;
  }
};

export const signIn = async (data: any) => {
  try {
    const uninterceptedAxiosInstance = axios.create();
    const res = await uninterceptedAxiosInstance.post(`/api/users/login`, data);
    return res;
  } catch (e: any) {
    throw e.response;
  }
};
