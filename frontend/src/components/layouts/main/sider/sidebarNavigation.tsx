import React from 'react';
import homeIcon from '@app/assets/icons/home.svg';
import builderIcon from '@app/assets/icons/builders.svg';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

const imgStyle: any = {
  img1: {
    width: '20px',
    height: 'auto',
    objectFit: 'cover',
  },
};

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'Home',
    key: 'home',
    url: '/',
    icon: <img src={homeIcon} alt="" style={imgStyle.img1} />,
  },
  // {
  //   title: 'Jobs',
  //   key: 'jobs',
  //   icon: <img src={iconJobs} alt="" />,
  //   // icon: <HomeOutlined />,
  //   children: [
  //     {
  //       title: 'Opportunities',
  //       key: 'opportunities',
  //       // url: '/retailer',
  //       // icon: <img src={store} alt="" style={imgStyle.img1} />,
  //     },
  //     {
  //       title: 'Current Jobs',
  //       key: 'current-jobs',
  //       // url: '/meeting-calendar',
  //       // icon: <img src={meetingCalendar} alt="" style={imgStyle.img1} />,
  //     },
  //     {
  //       title: 'Completed Jobs',
  //       key: 'completed-jobs',
  //       // url: '/meeting-calendar',
  //       // icon: <img src={meetingCalendar} alt="" style={imgStyle.img1} />,
  //     },
  //   ],
  // },
  {
    title: 'Users',
    key: 'users',
    url: '/user',
    icon: <img src={builderIcon} alt="" style={imgStyle.img1} />,
  },
];
