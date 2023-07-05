import { BuilderSkills } from '@app/interfaces';
import axios, { AxiosResponse } from 'axios';

export interface ProfileData {
  firstName: string;
  lastName: string;
  contactNumber: string;
  photoUrl: string;
  email?: string;
  cost?: number;
  bio?: string;
  skills: Skill[];
  recentJobs?: string[];
  addresses?: Address[];
}

export interface Address {
  formatted_address?: string;
  address_components?: any;
  geometry?: any;
  city?: any;
  county?: any;
  state?: any;
  zipcode?: any;
  place_id?: string;
  url?: string;
  lat?: any;
  lng?: any;
}

export interface Skill {
  id: number;
}

export interface MyProfileRecentJobsData {
  name: string;
  rating: number | null;
  // address: Address;
  recentJobMediaItems: MyProfileRecentJobsMedia[];
}
export interface MyProfileRecentJobsMedia {
  url: string;
}

export const UserDetail = async (): Promise<unknown | undefined> => {
  try {
    const response = await axios.get(`/api/users/me`);
    return response;
  } catch (err: any) {
    throw err.response;
  }
};

export const updateMyProfile = async (data: any): Promise<unknown | undefined> => {
  try {
    const response = await axios.patch(`api/users/me`, data);
    return response;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const builderSkills = async () => {
  try {
    const response = await axios.get<{ skills: BuilderSkills[] }>(`/api/skills`);
    return response;
  } catch (err: any) {
    throw err.response;
  }
};

export const buildercity = async (): Promise<unknown | undefined> => {
  try {
    const response = await axios.get(`/api/addresses/builder-available-cities`);
    return response;
  } catch (err: any) {
    throw err.response;
  }
};

export const builderMe = async (): Promise<unknown | undefined> => {
  try {
    const response = await axios.get(`/api/builders/me`);
    return response;
  } catch (err: any) {
    throw err.response;
  }
};

export const updateBuilderProfile = async (data: any): Promise<unknown | undefined> => {
  try {
    const response = await axios.patch(`/api/builders/me`, data);
    return response;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getRecentJobs = async (builderId: number): Promise<unknown | undefined> => {
  try {
    const response = await axios.get(`/api/builders/${builderId}/recent-jobs`);
    return response;
  } catch (err: any) {
    throw err.response;
  }
};

export const addRecentJobs = async (builderId: number, data: MyProfileRecentJobsData): Promise<unknown | undefined> => {
  try {
    const response = await axios.post(`/api/builders/${builderId}/recent-jobs`, data);
    return response;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const deleteJob = async (builderId: number, jobId: number): Promise<unknown | undefined> => {
  try {
    const response = await axios.delete(`/api/builders/${builderId}/recent-jobs/${jobId}`);
    return response;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const updateJob = async (builderId: number, jobId: number, data: any): Promise<unknown | undefined> => {
  try {
    const response = await axios.patch(`api/builders/${builderId}/recent-jobs/${jobId}`, data);
    return response;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getJobByJobId = async (builderId: number, jobId: number): Promise<unknown | undefined> => {
  try {
    const response = await axios.get(`/api/builders/${builderId}/recent-jobs/${jobId}`);
    return response;
  } catch (err: any) {
    throw err.response;
  }
};
