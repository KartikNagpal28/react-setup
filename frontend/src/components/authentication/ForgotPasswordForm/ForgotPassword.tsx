import React, { useState } from 'react';
import keyIcon from '@app/assets/icons/keyIcon.svg';
import forgotPasswordModule from './ForgotPassword.module.css';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Input } from 'antd';
import { forgotPassword } from '@app/api/forgotpassword.api';
import { useNavigate } from 'react-router-dom';
import { notificationController } from '@app/controllers/notificationController';
import BackToLogin from './BackToLogin';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [email, setEmail] = useState<string>('');

  const handleSubmit = () => {
    forgotPassword({ email })
      .then(() => {
        navigate('/forgotpasswordlink', { state: { email } });
      })
      .catch((err) => {
        notificationController.error({ message: err?.data?.message });
      });
  };
  return (
    <div className={`${forgotPasswordModule.container}`}>
      <div className={`${forgotPasswordModule.emailMainContainer}`}>
        <div className={`${forgotPasswordModule.topContainer}`}>
          <div className={`${forgotPasswordModule.imageContainer}`}>
            <img className="w-[23.3px] h-[23.3px]" src={keyIcon}></img>
          </div>
          <div className={`${forgotPasswordModule.emailHeadingContainer}`}>
            <h1 className={`${forgotPasswordModule.emailHeading}`}>Forgot password?</h1>
            <p className={`${forgotPasswordModule.emailSubHeading}`}>
              No worries, we&rsquo;ll send you reset instructions.
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
            <BaseButtonsForm.Item className={`${forgotPasswordModule.inputLabel}`} label="Email">
              <Input
                className={`${forgotPasswordModule.inputBox}`}
                placeholder="Enter your email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
            </BaseButtonsForm.Item>
            <button type="submit" style={{ marginTop: 24 }}>
              <div className={`${forgotPasswordModule.buttonContainer}`}>
                <div className={`${forgotPasswordModule.buttonText}`}>Reset Password</div>
              </div>
            </button>
          </BaseButtonsForm>
        </div>

        <BackToLogin />
      </div>
    </div>
  );
};

export default ForgotPassword;
