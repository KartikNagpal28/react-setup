import { useContext } from 'react';

import { FilterExperienceLevel, FilterLocation, FilterMaxCost } from './FilterInputs';

import classes from './Filters.module.css';

const Filters = () => {
  return (
    <div className={`${classes['filters-container']}`}>
      <p className="mb-[10px] text-[#170F1D] not-italic font-medium opacity-[0.5] text-[13px] leading-[20px]">
        Filters
      </p>

      <div className="flex flex-col gap-[5px]">
        <FilterExperienceLevel />
        <FilterLocation />
        <FilterMaxCost />
      </div>
    </div>
  );
};

export default Filters;
