import { useContext } from 'react';

import { Select } from '@common-components/selects/Select/Select';
import BuilderContext from '@app/components/builder/store/builder-context';
import { ReactComponent as ExpertLevelIcon } from '@app/assets/icons/ExpeLevelIcon.svg';

// Creates experience levels, just update the length to get desired length results
const selectOptions = Array.from({ length: 5 }, (_, idx) => {
  return {
    label: `Level ${idx + 1}`,
    value: idx + 1,
  };
});

export const ExperienceLevel = () => {
  const filterCtx = useContext(BuilderContext);

  const handleSelectLevels = (selectedOptionValues: number[]) => {
    filterCtx.updateFilter('experienceLevels', selectedOptionValues);
  };

  return (
    <Select
      mode="multiple"
      allowClear
      placeHolder={{ Icon: ExpertLevelIcon, title: 'Filter 2' }}
      options={selectOptions}
      filterOption={(inputValue, option) => option?.label?.toLowerCase().includes(inputValue.toLowerCase()) ?? false}
      onChange={handleSelectLevels}
    />
  );
};
