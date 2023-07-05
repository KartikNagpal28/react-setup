import axios from 'axios';

export const getCountries = async (): Promise<unknown | undefined> => {
  try {
    const response = await axios.get('/api/countries');
    return response;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getRegions = async (country: string): Promise<unknown | undefined> => {
  try {
    const response = await axios.get(`/api/regions?country=${country}`);
    return response;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const uploadPhoto = async (fileInput: any) => {
  try {
    const formdata = new FormData();
    formdata.append('file', fileInput);

    const config: any = {
      method: 'POST',
      url: `/api/file-upload`,
      data: formdata,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const res = await axios(config);
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};
