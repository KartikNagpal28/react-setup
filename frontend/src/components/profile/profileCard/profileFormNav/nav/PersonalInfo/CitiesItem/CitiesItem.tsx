import React from 'react';
import { Input } from '@app/components/common/inputs/Input/Input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const CitiesItem: React.FC = () => {
  return (
    <BaseButtonsForm.Item name="city" label="City">
      <Input />
    </BaseButtonsForm.Item>
  );
};
