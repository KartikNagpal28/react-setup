import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { notificationController } from '@app/controllers/notificationController';
import * as S from './LoginForm.styles';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import { doLogin } from '@app/store/slices/authSlice';
import { maxInputLength } from '@app/config/configVariable';

interface LoginFormData {
  email: string;
  password: string;
}

export const initValues: LoginFormData = {
  email: '',
  password: '',
};

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (values: LoginFormData) => {
    setLoading(true);
    dispatch(doLogin(values))
      .unwrap()
      .then(() => navigate('/'))
      .catch((err) => {
        notificationController.error({ message: err.message });
        setLoading(false);
      });
  };

  return (
    <Auth.FormWrapper>
      <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
        <Auth.FormTitle>Sign In</Auth.FormTitle>
        <S.LoginDescription>Please enter your credentials to sign in</S.LoginDescription>
        <Auth.FormItem
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'This field is required!' },
            {
              type: 'email',
              message: 'Please input a valid email address!',
            },
          ]}
        >
          <Auth.FormInput placeholder="Email" maxLength={maxInputLength} />
        </Auth.FormItem>
        <Auth.FormItem
          label="Password"
          name="password"
          rules={[{ required: true, message: 'This field is required!' }]}
        >
          <Auth.FormInputPassword placeholder="Password" maxLength={maxInputLength} />
        </Auth.FormItem>
        <Auth.ActionsWrapper>
          {/* <BaseForm.Item name="rememberMe" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <S.RememberMeText>{t('login.rememberMe')}</S.RememberMeText>
            </Auth.FormCheckbox>
          </BaseForm.Item> */}
          {/* <Link to="/auth/forgot-password">
            <S.ForgotPasswordText>Forgot Password?</S.ForgotPasswordText>
          </Link> */}
        </Auth.ActionsWrapper>
        <BaseForm.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            Login
          </Auth.SubmitButton>
        </BaseForm.Item>

        <Auth.FooterWrapper>
          <Auth.Text>
            {"Don't have an account? "}
            <Link to="/auth/sign-up">
              <Auth.LinkText>Register</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
