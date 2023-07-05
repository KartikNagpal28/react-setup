import home from '@app/Images/Home2.svg';
import tasks from '@app/Images/tasks.svg';

export interface TopSidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: TopSidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const topSidebarNavigation: TopSidebarNavigationItem[] = [
  {
    title: 'Home',
    key: 'home',
    url: '/',
    icon: <img src={home} alt="" />,
  },
  {
    title: 'Task',
    key: 'tasks',
    url: '/tasks',
    icon: <img src={tasks} alt="" />,
  },
];
