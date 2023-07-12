import React, { useState } from 'react';
import './LoginStyle.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import SignUpTestimonial from '../SignUp-Form/SignUpTestimonial';
import { Link } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
  remember?: boolean;
}

const initValues = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: LoginFormData) => {
    navigate('/');
  };

  return (
    <>
      <div className="login-container">
        <div className="login-left-container">
          <div className="login-header-navigation">
            {/* Logo for large screen */}
            <span className="font-bold text-3xl flex space-x-1">
              <p>👩‍🔧</p>
              <p className="text-white mt-1">Logo</p>
            </span>
          </div>
          <div className="flex items-center h-screen">
            <div className="login-container-form">
              <Form
                name="normal_login"
                layout="vertical"
                className="login-form"
                // initialValues={{ remember: true }}
                initialValues={initValues}
                onFinish={handleSubmit}
                requiredMark={'optional'}
              >
                <div className="form-text">
                  <span className="welcome-xl">Welcome back</span>
                  <span className="welcome-sm">Welcome back! Please enter your details.</span>
                </div>
                <div className="mt-8">
                  <Form.Item
                    label="Email"
                    name="email"
                    id="email"
                    className="login-form-item mb-[20px]"
                    rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                  >
                    <Input
                      className="input-box placeholder:text-[#667085] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6"
                      placeholder="Enter your email"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    style={{ color: 'white' }}
                    name="password"
                    className="login-form-item"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                    <Input
                      className="input-box placeholder:text-[#667085] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <div className="flex justify-between mb-6 pt-2">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember for 30 days</Checkbox>
                    </Form.Item>

                    <a
                      className="login-form-forgot"
                      onClick={() => {
                        navigate('/forgotpassword');
                      }}
                    >
                      Forgot password
                    </a>
                  </div>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-btn mb-8">
                      Sign in
                    </Button>
                    <div className="text-center">
                      <span className="text-[#FFF] font-normal text-[14px] leading-6 opacity-80">
                        Don&apos;t have an account?
                      </span>{' '}
                      <Link
                        to="/signup"
                        className="text-[#04E191] hover:text-[#04E191] font-semibold text-[14px] leading-6"
                      >
                        Sign up
                      </Link>
                    </div>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="login-right-container">
          <SignUpTestimonial />
        </div>
      </div>
    </>
  );
};

export default Login;
