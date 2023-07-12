import { RecentJobs } from './Builder';

export interface MyProfileHeaderProps {
  title: string;
}

// export interface BuilderSkills {
//   id: number;
//   skillName: string;
// }

export interface MyProfileRecentJobsProps {
  builderId: number;
}

export interface MyProfileRecentJobsData {
  name: string;
  rating: null;
  address: any;
  recentJobMediaItems: { id: number; url: string }[];
}

export interface EditJobProps {
  isEditJobClicked: boolean;
  setEditJobClicked: (isOpen: boolean) => void;
  builderId: number;
  editJobId: number;
}

interface Address {
  fullAddress: string;
  city: string;
  county: string;
  state: string;
  zipcode: string;
  addressPlaceId: string;
  addressUrl: string;
  lat: string;
  long: string;
}
