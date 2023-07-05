import React from 'react';
import { Input } from '@app/components/common/inputs/Input/Input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const AddressItem: React.FC<{ number: number }> = ({ number }) => {
  return (
    <BaseButtonsForm.Item name={`address${number}`} label={`Address ${number}`}>
      <Input />
    </BaseButtonsForm.Item>
  );
};
