import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import showFilterIcon from '@app/assets/icons/showFilterIcon.svg';
import { ReactComponent as SearchFilterIcon } from '@app/assets/icons/searchFilterIcon.svg';

import classes from './FiltersHeader.module.css';
import { useResponsive } from '@app/hooks/useResponsive';

const FilterIcon = () => {
  const handleIconClick = () => {};

  const { isTablet } = useResponsive();

  useEffect(() => {
    if (isTablet) {
    } else {
    }
  }, [isTablet]);

  return (
    <div className={`${classes['filter-icon']}`} onClick={handleIconClick}>
      <img src={showFilterIcon} />
    </div>
  );
};

const FiltersHeader = () => {
  const [filterName, setFilterName] = useState<string>('');
  const isFirstRun = useRef(true);

  const nameChangeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setFilterName(value);
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const timeout = setTimeout(() => {}, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [filterName]);

  return (
    <div className="flex flex-col gap-[13px]">
      <h1 className={`${classes.heading}`}>Search Here</h1>
      <div className="flex gap-[8px] items-center">
        <div className={classes['search-input']}>
          <SearchFilterIcon />
          <input
            name="search-filter"
            style={{ fontStyle: 'normal', fontWeight: '400', backgroundColor: 'transparent' }}
            type="text"
            className="focus:outline-0 border-0 text-[14px] text-[#667085] placeholder:text-[#667085] leading-[17px]  w-full"
            placeholder="Search here"
            onChange={nameChangeHandler}
          />
        </div>

        <FilterIcon />
      </div>
      <div className="border-b-[1px] border-[#EAECF0]"></div>
    </div>
  );
};

export default FiltersHeader;
