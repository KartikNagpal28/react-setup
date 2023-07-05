import { PageHeaderProps } from '@app/interfaces';
import PageHeader from './PageHeader/PageHeader';

import classes from './MainSection.module.css';

const MainSection: React.FC<PageHeaderProps> = ({ icon, title, subtitle, children }) => {
  return (
    <section className="flex flex-col">
      <PageHeader icon={icon} title={title} subtitle={subtitle}></PageHeader>

      <div className={classes.container}>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default MainSection;
