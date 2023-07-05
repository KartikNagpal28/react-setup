import React from 'react';
import EmailIcon from '@app/assets/icons/EmailIcongreen.svg';
import forgotPwdModule from './ForgotPasswordLink.module.css';
import { useLocation } from 'react-router-dom';
import BackToLogin from './BackToLogin';
import { forgotPassword } from '@app/api/forgotpassword.api';
import { notificationController } from '@app/controllers/notificationController';

const ForgotPasswordLink: React.FC = () => {
  const { state } = useLocation();

  const resend = () => {
    if (state.email === null) {
      return;
    }
    forgotPassword({ email: state.email })
      .then(() => {
        notificationController.success({ message: 'New password reset link has been sent' });
      })
      .catch((err) => {
        notificationController.error({ message: err?.data?.message });
      });
  };
  return (
    <div className={`${forgotPwdModule.container}`}>
      <div className={`${forgotPwdModule.emailMainContainer}`}>
        <div className={`${forgotPwdModule.topContainer}`}>
          <div className={`${forgotPwdModule.imageContainer}`}>
            <img className="w-[23.5px] h-[18.5px]" src={EmailIcon}></img>
          </div>
          <div className={`${forgotPwdModule.emailHeadingContainer}`}>
            <h1 className={`${forgotPwdModule.emailHeading}`}>Check your email</h1>
            <p className={`${forgotPwdModule.emailSubHeading}`}>
              We sent a verification link to <br />
              {state?.email ?? ''}
            </p>
          </div>
        </div>
        {/*<div className={`${forgotPwdModule.buttonContainer}`}>
          <button className={`${forgotPwdModule.buttonText}`}>Open email app</button>
        </div>*/}
        <div className="flex">
          <p className={`${forgotPwdModule.resendHeading}`}>Didn&rsquo;t receive the email?</p>
          <span className={`${forgotPwdModule.resendHeadingColored}`} onClick={() => resend()}>
            &nbsp;Click to resend
          </span>
        </div>
        <BackToLogin />
      </div>
    </div>
  );
};

export default ForgotPasswordLink;
