import React from 'react';
import { FormItemProps } from 'antd';
import { Input } from '@app/components/common/inputs/Input/Input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

interface EmailItemProps extends FormItemProps {
  verified?: boolean;
  onClick?: () => void;
}

export const EmailItem: React.FC<EmailItemProps> = ({ required, onClick, verified, ...props }) => {
  return (
    <BaseButtonsForm.Item
      name="email"
      $isSuccess={verified}
      $successText="Verified"
      label="Email"
      rules={[
        { required, message: 'This field is required!' },
        {
          type: 'email',
          message: 'Please input a valid email address!',
        },
      ]}
      {...props}
    >
      <Input disabled={verified} onClick={onClick} />
    </BaseButtonsForm.Item>
  );
};
