import axios from 'axios';

export interface ForgotPassword {
  email: string;
}

export interface ForgotPasswordVerify {
  email: string;
  token: string;
  newPassword: string;
}

export const forgotPassword = async (data: ForgotPassword) => {
  try {
    const response = await axios.post('/api/users/forgot-password', data);
    return response;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw e.response;
    } else {
      throw new Error(e as string);
    }
  }
};

export const forgotPasswordVerify = async (data: ForgotPasswordVerify) => {
  try {
    const response = await axios.post('/api/users/forgot-password/verify', data);
    return response;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw e.response;
    } else {
      throw new Error(e as string);
    }
  }
};
