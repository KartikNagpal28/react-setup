import React from 'react';

import { BuilderContextType, BuilderFilters } from '@app/interfaces';

/* eslint-disable @typescript-eslint/no-empty-function */
const BuilderContext = React.createContext<BuilderContextType>({
  builders: [],
  showFilters: false,
  filters: new BuilderFilters(),
  updateFilter: () => {},
  updateShowFilter: () => {},
});

export default BuilderContext;
