import React from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { InputPassword } from '@app/components/common/inputs/InputPassword/InputPassword';
import { passwordPattern } from '@app/constants/patterns';

export const NewPasswordItem: React.FC = () => {
  return (
    <BaseButtonsForm.Item
      name="newPassword"
      label="New Password"
      dependencies={['password']}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
        {
          pattern: passwordPattern,
          message:
            'Your password should be minimum eight characters and contain at least one uppercase letter, one lowercase letter and one number',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') !== value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("Your new password can't be same as previous password"));
          },
        }),
      ]}
    >
      <InputPassword />
    </BaseButtonsForm.Item>
  );
};
