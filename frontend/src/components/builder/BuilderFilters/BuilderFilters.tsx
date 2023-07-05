import Filters from './Filters/Filters';
import FiltersHeader from './FiltersHeader/FiltersHeader';

import classes from './BuilderFilters.module.css';

const BuilderFilters = () => {
  return (
    <div className={`${classes.filters}`}>
      <FiltersHeader />
      <Filters />
    </div>
  );
};

export default BuilderFilters;
