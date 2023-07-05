import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { notificationController } from '@app/controllers/notificationController';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import * as S from './SignUpForm.styles';
import { registerUser } from '@app/services/registerUser';
import { Option } from '@app/components/common/selects/Select/Select';
import { maxInputLength } from '@app/config/configVariable';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  corpType: string;
  companyName: string;
  password: string;
  termOfUse?: boolean;
}

const initValues = {
  firstName: '',
  lastName: '',
  email: '',
  corpType: '',
  companyName: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values: SignUpFormData) => {
    setLoading(true);
    if (values.termOfUse === false) {
      notificationController.error({ message: 'Must accept Terms of Use and Privacy Policy' });
      setLoading(false);
    } else {
      const formData = values;
      delete formData.termOfUse;
      registerUser(formData)
        .then(() => {
          notificationController.success({
            message: 'New user was created',
            description: 'Please use your new credentials to log in',
          });
          navigate('/auth/login');
        })
        .catch((err) => {
          notificationController.error({ message: err?.data?.message });
          setLoading(false);
        });
    }
  };

  return (
    <Auth.FormWrapper>
      <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
        <S.Title>Create your account</S.Title>
        <Auth.FormItem
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: 'This field is required!' }]}
        >
          <Auth.FormInput placeholder="First Name" maxLength={maxInputLength} />
        </Auth.FormItem>
        <Auth.FormItem
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: 'This field is required!' }]}
        >
          <Auth.FormInput placeholder="Last Name" maxLength={maxInputLength} />
        </Auth.FormItem>
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
        <Auth.FormItem name="corpType" label="Corp Type" rules={[{ required: true, message: 'Must choose Corp Type' }]}>
          <Auth.FormSelect placeholder="Please select a corp type">
            <Option value="Brokerage">Brokerage</Option>
            <Option value="Brand">Brand</Option>
          </Auth.FormSelect>
        </Auth.FormItem>
        <Auth.FormItem
          name="companyName"
          label="Company Name"
          rules={[{ required: true, message: 'This field is required!' }]}
        >
          <Auth.FormInput placeholder="Company Name" maxLength={maxInputLength} />
        </Auth.FormItem>
        <Auth.FormItem
          label="Password"
          name="password"
          rules={[{ required: true, message: 'This field is required!' }]}
        >
          <Auth.FormInputPassword placeholder="Password" maxLength={maxInputLength} />
        </Auth.FormItem>

        <Auth.ActionsWrapper>
          <BaseForm.Item name="termOfUse" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <Auth.Text>
                {'By signing up, you agree to the'}{' '}
                <Link to="/" target={'_blank'}>
                  <Auth.LinkText>Terms of Use</Auth.LinkText>
                </Link>{' '}
                and{' '}
                <Link to="/" target={'_blank'}>
                  <Auth.LinkText>Privacy Policy</Auth.LinkText>
                </Link>
              </Auth.Text>
            </Auth.FormCheckbox>
          </BaseForm.Item>
        </Auth.ActionsWrapper>
        <BaseForm.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            Sign Up
          </Auth.SubmitButton>
        </BaseForm.Item>

        <Auth.FooterWrapper>
          <Auth.Text>
            Already have an account? Log in{' '}
            <Link to="/auth/login">
              <Auth.LinkText>here</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
