import axios from 'axios';

export interface EmailVerification {
  email: string;
  code: number;
}

export interface EmailVerificationResend {
  email: string;
}

export const verify = async (data: EmailVerification) => {
  try {
    const response = await axios.post('/api/users/verify', data);
    return response;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw e.response;
    } else {
      throw new Error(e as string);
    }
  }
};

export const resendEmail = async (data: EmailVerificationResend) => {
  try {
    const response = await axios.post('/api/users/verify/resend', data);
    return response;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw e.response;
    } else {
      throw new Error(e as string);
    }
  }
};
