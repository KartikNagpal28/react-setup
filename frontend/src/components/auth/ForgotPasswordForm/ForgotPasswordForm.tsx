import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as S from './ForgotPasswordForm.styles';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { notificationController } from '@app/controllers/notificationController';

interface ForgotPasswordFormData {
  email: string;
}

const initValues = {
  email: 'chris.johnson@altence.com',
};

export const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values: ForgotPasswordFormData) => {
    setLoading(true);
  };

  return (
    <Auth.FormWrapper>
      <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
        <Auth.BackWrapper onClick={() => navigate(-1)}>
          <Auth.BackIcon />
          Back
        </Auth.BackWrapper>
        <Auth.FormTitle>Reset password</Auth.FormTitle>
        <S.Description>
          Enter your email address and we’ll send an verification code to reset your password
        </S.Description>
        <Auth.FormItem
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input users name or delete this field' }]}
        >
          <Auth.FormInput placeholder="Email" />
        </Auth.FormItem>
        <BaseForm.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            Send instructions
          </S.SubmitButton>
        </BaseForm.Item>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
