import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import tunnelLogo from '../../../TunnelImages/tunnelLogo.svg';
import SignUpTestimonial from './SignUpTestimonial';
import './SignUpForm.css';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import { AuthSelect } from '@app/components/common/selects/AuthSelect/AuthSelect';
import { registerUser } from '@app/services/registerUser';
import { notificationController } from '@app/controllers/notificationController';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface SignUpFormData {
  userType: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = (formData: SignUpFormData) => {
    setLoading(true);
    setLoading(true);
    registerUser(formData)
      .then(() => {
        notificationController.success({
          message: 'New user was created',
          description: 'Please use your new credentials to log in',
        });
        navigate('/emailverification', { state: { email: formData.email, password: formData.password } });
      })
      .catch((err) => {
        notificationController.error({ message: err?.data?.message });
        setLoading(false);
      });
  };

  return (
    <>
      <div className="signup-container">
        <div className="left-container">
          <div className="left-container-header">
            <img src={tunnelLogo} alt="" />
          </div>
          <div className="flex items-center h-screen">
            <div className="left-container-form">
              <Form
                requiredMark={'optional'}
                name="normal_login"
                layout="vertical"
                className="signup-form"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
              >
                <div className="signup-form-text">
                  <span className="signup-welcome-xl">Welcome!</span>
                  <span className="text-opacity signup-welcome-sm">Please enter your details.</span>
                </div>
                <div className="mt-[2rem]">
                  <Form.Item
                    label="User Type"
                    name="userType"
                    className="form-item mb-[20px]"
                    rules={[{ required: true, message: 'Please select user type!' }]}
                  >
                    <AuthSelect placeholder="Select user type">
                      <Option value="builder">Builder</Option>
                      <Option value="business">Business</Option>
                    </AuthSelect>
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    className="form-item"
                    rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                  >
                    <Input
                      className="signup-input-box placeholder:text-[#667085] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6"
                      placeholder="Enter your email"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    className="form-item"
                    rules={[{ required: true, message: 'Please enter your password!' }]}
                  >
                    <Input
                      className="signup-input-box placeholder:text-[#667085] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="signup-form-button mt-[24px] mb-10 bg-[#04E191] hover:bg-[#04E191] text-[16px] font-semibold leading-6"
                      loading={isLoading}
                    >
                      Sign Up
                    </Button>
                    <div className="signup-text-center">
                      <span className="font-normal text-[14px] leading-6 opacity-80" style={{ color: 'white' }}>
                        Already have an acount?
                      </span>{' '}
                      <Link
                        to="/login"
                        className="signup-text-green-color hover:text-[#04E191] font-semibold text-[14px] leading-6"
                      >
                        Log in here!
                      </Link>
                    </div>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="rigth-container">
          <SignUpTestimonial />
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
