export interface BuilderProfileProps {
  isProfileClicked: boolean;
  setProfileClicked: (isOpen: boolean) => void;
  builderDetail: BuilderDetail;
}

export interface BuilderDetail {
  id?: number;
  experienceLevel?: number;
  bio?: string;
  jobsCompleted?: number;
  rating?: number;
  cost?: number;
  user?: User;
  skills?: Skills[];
  addresses?: [];
}

export interface Skills {
  id: number;
  skillName: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  photoUrl: string;
  builderId: number;
}

export interface CardHeaderProps {
  builderDetail: BuilderDetail;
}

export interface RecentJobs {
  id: number;
  name: string;
  rating: number;
  address: string[];
  // recentJobMediaItems: RecentJobMediaItems[];
  recentJobMediaItems: { id: number; url: string }[];
}

// export interface RecentJobMediaItems {
//   id: number;
//   url: string;
//   recentJobId: number;
//   createdAt: string;
//   updatedAt: string;
// }

export interface BuilderCarouselProps {
  isProfileClicked: boolean;
  setProfileClicked: (isOpen: boolean) => void;
  isCarouselOpen: boolean;
  setIsCaraouselOpen: (isOpen: boolean) => void;
  job: RecentJobs | null;
}

export interface AvailableLocations {
  city: string;
  state: string;
  county?: string;
}

export class BuilderFilters {
  constructor(
    public skillIds: number[] | null = null,
    public experienceLevels: number[] | null = null,
    public costMin: number | null = null,
    public costMax: number | null = null,
    public name: string = '',
    public cities: AvailableLocations[] | null = null,
    public limit: number = 10,
    public pageNo: number = 1,
  ) {}
}

export interface BuilderContextType {
  builders: BuilderDetail[];
  showFilters: boolean;
  filters: BuilderFilters;
  updateFilter: <T extends keyof BuilderFilters>(filterType: T, val: BuilderFilters[T]) => void;
  updateShowFilter: (val?: boolean) => void;
}
