import React from 'react';
import { Input } from '@app/components/common/inputs/Input/Input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const FirstNameItem: React.FC = () => {
  return (
    <BaseButtonsForm.Item name="firstName" label="First Name">
      <Input />
    </BaseButtonsForm.Item>
  );
};
