import { useContext, useEffect, useState } from 'react';

import { MyProfileApi } from '@app/api';
import { BuilderSkills } from '@app/interfaces';
import { Select } from '@common-components/selects/Select/Select';
// import BuilderContext from '@app/components/builder/store/builder-context';
import { ReactComponent as SkillIcon } from '@app/assets/icons/skillicon.svg';

export const Skills = () => {
  const [skills, setSkills] = useState<BuilderSkills[]>([]);

  useEffect(() => {
    MyProfileApi.builderSkills().then((res) => {
      if (res.data) {
        setSkills(res.data.skills);
      }
    });
  }, []);

  const skillOptions = skills.map(({ skillName, id }) => {
    return {
      label: skillName,
      value: id,
    };
  });

  // const filterCtx = useContext(BuilderContext);
  const handleSelectSkills = (selectedOptionValues: number[]) => {
    // filterCtx.updateFilter('skillIds', selectedOptionValues);
  };

  return (
    <Select
      mode="multiple"
      allowClear
      placeHolder={{ Icon: SkillIcon, title: 'Filter 1' }}
      options={skillOptions}
      filterOption={(inputValue, option) => option?.label.toLowerCase().includes(inputValue.toLowerCase()) ?? false}
      onChange={handleSelectSkills}
    />
  );
};
