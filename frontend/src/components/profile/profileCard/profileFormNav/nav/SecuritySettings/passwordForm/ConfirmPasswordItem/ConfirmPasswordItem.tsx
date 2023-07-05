import React from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { InputPassword } from '@app/components/common/inputs/InputPassword/InputPassword';

export const ConfirmItemPassword: React.FC = () => {
  return (
    <BaseButtonsForm.Item
      name="confirmPassword"
      label="Confirm Password"
      dependencies={['newPassword']}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('newPassword') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords that you entered do not match'));
          },
        }),
      ]}
    >
      <InputPassword />
    </BaseButtonsForm.Item>
  );
};
