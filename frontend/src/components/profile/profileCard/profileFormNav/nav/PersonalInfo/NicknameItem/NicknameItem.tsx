import React from 'react';
import { Input } from '@app/components/common/inputs/Input/Input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const NicknameItem: React.FC = () => {
  return (
    <BaseButtonsForm.Item name="nickname" label="Nickname">
      <Input />
    </BaseButtonsForm.Item>
  );
};
