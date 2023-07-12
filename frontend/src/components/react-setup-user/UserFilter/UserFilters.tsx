import Filters from './Filters/Filters';
import FiltersHeader from './FiltersHeader/FiltersHeader';

import classes from './UserFilters.module.css';

const UserFilters = () => {
  return (
    <div className={`${classes.filters}`}>
      <FiltersHeader />
      <Filters />
    </div>
  );
};

export default UserFilters;
