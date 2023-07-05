import React from 'react';
import { Input } from '@app/components/common/inputs/Input/Input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const LastNameItem: React.FC = () => {
  return (
    <BaseButtonsForm.Item name="lastName" label="Last Name">
      <Input />
    </BaseButtonsForm.Item>
  );
};
