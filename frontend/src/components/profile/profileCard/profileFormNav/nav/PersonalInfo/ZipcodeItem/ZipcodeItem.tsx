import React from 'react';
import { Input } from '@app/components/common/inputs/Input/Input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const ZipcodeItem: React.FC = () => {
  return (
    <BaseButtonsForm.Item name="zipcode" label="Zipcode">
      <Input />
    </BaseButtonsForm.Item>
  );
};
