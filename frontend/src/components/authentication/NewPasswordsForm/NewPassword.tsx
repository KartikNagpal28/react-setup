import React, { useState } from 'react';
import keyIcon from '@app/assets/icons/keyIcon.svg';
import backToLoginIcon from '@app/assets/icons/backToLoginIcon.svg';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Input } from 'antd';
import newPasswordModule from './NewPassword.module.css';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const NewPassword: React.FC = () => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const handleSubmit = () => {
    console.log(' ');
  };
  return (
    <div className={`${newPasswordModule.container}`}>
      <div className={`${newPasswordModule.emailMainContainer}`}>
        <div className={`${newPasswordModule.topContainer}`}>
          <div className={`${newPasswordModule.imageContainer}`}>
            <img className="w-[23.3px] h-[23.3px]" src={keyIcon}></img>
          </div>
          <div className={`${newPasswordModule.emailHeadingContainer}`}>
            <h1 className={`${newPasswordModule.emailHeading}`}>Forgot password?</h1>
            <p className={`${newPasswordModule.emailSubHeading}`}>
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
            <BaseButtonsForm.Item className={`${newPasswordModule.inputLabel}`} label="Email">
              <Input className={`${newPasswordModule.inputBox}`} placeholder="Enter your email"></Input>
            </BaseButtonsForm.Item>
            <BaseButtonsForm.Item className={`${newPasswordModule.inputLabel}`} label="Password">
              <Input
                type="password"
                className={`${newPasswordModule.inputBox}`}
                placeholder="Enter your password"
              ></Input>
            </BaseButtonsForm.Item>
          </BaseButtonsForm>
          <div className={`${newPasswordModule.buttonContainer}`}>
            <button className={`${newPasswordModule.buttonText}`}>Reset Password</button>
          </div>
        </div>

        <div className={`${newPasswordModule.backToLoginContainer}`}>
          <span>
            <img src={backToLoginIcon} alt="" />
          </span>
          <button className={`${newPasswordModule.backToLogin}`}>Back to log in</button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
