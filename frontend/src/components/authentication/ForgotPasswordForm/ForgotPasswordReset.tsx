import React, { useState } from 'react';
import keyIcon from '@app/assets/icons/keyIcon.svg';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Input } from 'antd';
import forgotPasswordResetModule from './ForgotPasswordReset.module.css';
import { notificationController } from '@app/controllers/notificationController';
import { forgotPasswordVerify } from '@app/api/forgotpassword.api';
import { useLocation, useNavigate } from 'react-router-dom';
import BackToLogin from './BackToLogin';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const ForgotPasswordReset: React.FC = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      notificationController.error({ message: 'Passwords do not match' });
      return;
    }

    const params = new URLSearchParams(search);
    const email = params.get('email');
    const token = params.get('token');

    if (email === null || token === null) {
      notificationController.error({ message: 'Invalid params' });
      return;
    }
    forgotPasswordVerify({ email, token, newPassword: password })
      .then((res) => {
        navigate('/forgotpasswordconfirm', { state: { user: res.data.user, token: res.data.token } });
      })
      .catch((err) => {
        notificationController.error({ message: err?.data?.message });
        navigate('/');
      });
  };

  return (
    <div className={`${forgotPasswordResetModule.container}`}>
      <div className={`${forgotPasswordResetModule.emailMainContainer}`}>
        <div className={`${forgotPasswordResetModule.topContainer}`}>
          <div className={`${forgotPasswordResetModule.imageContainer}`}>
            <img className="w-[23.3px] h-[23.3px]" src={keyIcon}></img>
          </div>
          <div className={`${forgotPasswordResetModule.emailHeadingContainer}`}>
            <h1 className={`${forgotPasswordResetModule.emailHeading}`}>Set new password</h1>
            <p className={`${forgotPasswordResetModule.emailSubHeading}`}>
              Your new password must be different to <br />
              previously used passwords.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[24px]">
          <BaseButtonsForm
            {...formItemLayout}
            isFieldsChanged={isFieldsChanged}
            onFinish={handleSubmit}
            onFieldsChange={() => setFieldsChanged(true)}
          >
            <BaseButtonsForm.Item className={`${forgotPasswordResetModule.inputLabel}`} label="Password">
              <Input
                type="password"
                className={`${forgotPasswordResetModule.inputBox}`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Input>
            </BaseButtonsForm.Item>
            <BaseButtonsForm.Item className={`${forgotPasswordResetModule.inputLabel}`} label="Confirm">
              <Input
                type="password"
                className={`${forgotPasswordResetModule.inputBox}`}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              ></Input>
            </BaseButtonsForm.Item>
            <button style={{ marginTop: 24 }} type="submit">
              <div className={`${forgotPasswordResetModule.buttonContainer}`}>
                <div className={`${forgotPasswordResetModule.buttonText}`}>Reset Password</div>
              </div>
            </button>
          </BaseButtonsForm>
        </div>

        <BackToLogin />
      </div>
    </div>
  );
};

export default ForgotPasswordReset;
