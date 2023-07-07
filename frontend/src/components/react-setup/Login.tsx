import React from 'react';
import './LoginStyle.css';
import { Button, Checkbox, Form, Input } from 'antd';
import tunnelLogo from '@app/TunneImages/tunnelLogo.svg';
import Testimonial from './Testimonial';
const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <div className="box">
        <div className="container">
          <div className="header-navigation">
            <img className="logo" src={tunnelLogo} alt="" />
          </div>
          <div className="form-container">
            <Form
              name="normal_login"
              layout="vertical"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <div className="form-text">
                <h1 style={{ color: '#fff' }}>Welcome back</h1>
                <p style={{ color: 'white' }}>Welcome back! Please enter your details.</p>
              </div>
              <div>
                <label style={{ color: 'white' }} htmlFor="email">
                  email
                </label>
                <Form.Item
                  name="email"
                  id="email"
                  className="form-item"
                  rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                >
                  <Input className="input-box" placeholder="Enter your email" />
                </Form.Item>
                <label style={{ color: 'white' }} htmlFor="password">
                  password
                </label>
                <Form.Item
                  style={{ color: 'white' }}
                  name="password"
                  className="form-item"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input className="input-box" type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox style={{ color: 'white' }}>Remember for 30 days</Checkbox>
                  </Form.Item>

                  <a style={{ color: 'green' }} className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Sign in
                  </Button>
                  <span style={{ color: 'white' }}>Don&apos;t have an account?</span>{' '}
                  <a style={{ color: 'green' }} href="">
                    register now!
                  </a>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
        <div>
          <Testimonial />
        </div>
      </div>
    </>
  );
};

export default Login;
