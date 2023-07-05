import { useEffect, useReducer, useState } from 'react';

import { BuilderApi } from '@app/api';
import BuilderContext from './builder-context';
import { BuilderFilters, BuilderContextType, BuilderDetail } from '@app/interfaces';

const builderFilterReducer = <T extends keyof BuilderFilters>(
  state: BuilderFilters,
  { type, val }: { type: T; val: BuilderFilters[T] },
): BuilderFilters => {
  let updatedVal = val;
  if (Array.isArray(updatedVal) && !updatedVal.length) {
    updatedVal = null as BuilderFilters[T];
  }
  switch (type) {
    case 'skillIds': {
      return { ...state, skillIds: updatedVal as BuilderFilters['skillIds'] };
    }
    case 'experienceLevels': {
      return { ...state, experienceLevels: updatedVal as BuilderFilters['experienceLevels'] };
    }
    case 'cities': {
      return { ...state, cities: updatedVal as BuilderFilters['cities'] };
    }
    case 'costMin': {
      return { ...state, costMin: val as BuilderFilters['costMin'] };
    }
    case 'costMax': {
      return { ...state, costMax: val as BuilderFilters['costMax'] };
    }
    case 'name': {
      return { ...state, name: val as BuilderFilters['name'] };
    }
    case 'pageNo': {
      return { ...state, pageNo: val as BuilderFilters['pageNo'] };
    }
    case 'limit': {
      return { ...state, limit: val as BuilderFilters['limit'] };
    }
  }
  return defaultFilterState;
};

const defaultFilterState: BuilderFilters = new BuilderFilters();

const BuilderProvider: React.FC = ({ children }) => {
  const [filterState, dispatchFilterAction] = useReducer(builderFilterReducer, defaultFilterState);
  const [builders, setBuilders] = useState<BuilderDetail[]>([]);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    BuilderApi.getAllBuilders(filterState).then((res) => {
      setBuilders(res.data.builders);
    });
  }, [filterState]);

  const updateFilterHandler = <T extends keyof BuilderFilters>(filterType: T, val: BuilderFilters[T]) => {
    dispatchFilterAction({ type: filterType, val });
  };

  const updateShowFilterHandler = (val?: boolean) => {
    setShowFilters((prevState) => {
      if (val === undefined) {
        return !prevState;
      } else {
        return val;
      }
    });
  };

  const builderContext: BuilderContextType = {
    builders: builders,
    showFilters,
    filters: filterState,
    updateFilter: updateFilterHandler,
    updateShowFilter: updateShowFilterHandler,
  };

  return <BuilderContext.Provider value={builderContext}>{children}</BuilderContext.Provider>;
};

export default BuilderProvider;
