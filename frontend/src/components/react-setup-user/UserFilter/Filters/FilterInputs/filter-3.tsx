import { useContext, useEffect, useState } from 'react';
import { AvailableLocations } from '@app/interfaces';
import { Select } from '@common-components/selects/Select/Select';
// import BuilderContext from '@app/components/builder/store/builder-context';
import { ReactComponent as LocationIcon } from '@app/assets/icons/LocationIcon.svg';

export const Location = () => {
  const [availableLocations, setAvailableLocations] = useState<AvailableLocations[]>([]);

  useEffect(() => {
    // For setting the cities data
  }, []);

  // const filterCtx = useContext(BuilderContext);

  const handleSelectLocations = (selectedOptionValues: string[]) => {
    const updatedLocations = selectedOptionValues
      .map((location) => {
        const fullLocation = availableLocations.find((loc) => loc.city === location);
        return fullLocation;
      })
      .filter((availableLocation): availableLocation is AvailableLocations => availableLocation !== undefined);

    // filterCtx.updateFilter('cities', updatedLocations);
  };

  return (
    <Select
      mode="multiple"
      allowClear
      placeHolder={{ Icon: LocationIcon, title: 'Filter 3', showChevron: false }}
      options={availableLocations.map((location) => ({
        label: `${location.city}`,
        value: location.city,
      }))}
      onChange={handleSelectLocations}
    />
  );
};
