import React from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { InputPassword } from '@app/components/common/inputs/InputPassword/InputPassword';

export const CurrentPasswordItem: React.FC = () => {
  return (
    <BaseButtonsForm.Item
      name="password"
      label="Current Password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <InputPassword />
    </BaseButtonsForm.Item>
  );
};
