import { useContext } from 'react';

import BuilderContext from '../../store/builder-context';
import { FilterExperienceLevel, FilterLocation, FilterMaxCost, FilterSkills } from './FilterInputs';

import classes from './Filters.module.css';

const Filters = () => {
  const ctx = useContext(BuilderContext);

  return (
    <div className={`${classes['filters-container']} ${ctx.showFilters ? 'block' : 'hidden'}`}>
      <p className="mb-[10px] text-[#170F1D] not-italic font-medium opacity-[0.5] text-[13px] leading-[20px]">
        Filters
      </p>

      <div className="flex flex-col gap-[5px]">
        <FilterSkills />
        <FilterExperienceLevel />
        <FilterLocation />
        <FilterMaxCost />
      </div>
    </div>
  );
};

export default Filters;
