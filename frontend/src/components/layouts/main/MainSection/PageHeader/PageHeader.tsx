import { PageHeaderProps } from '@app/interfaces';

import classes from './PageHeader.module.css';

const PageHeader: React.FC<PageHeaderProps> = ({ icon, title, subtitle }) => {
  return (
    <div className={classes['header-container']}>
      <img className={`${classes.icon}`} src={icon} alt="Header Icon" />
      <h1 className={`${classes.heading}`}>{title}</h1>
      <span className={`${classes['sub-heading']}`}>{subtitle}</span>
    </div>
  );
};

export default PageHeader;
