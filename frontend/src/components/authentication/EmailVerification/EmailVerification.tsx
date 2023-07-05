import React from 'react';
import EmailIcon from '@app/assets/icons/EmailIcongreen.svg';
import emailModule from './EmailVerification.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { EmailResend } from './EmailResend';
import BackToLoginButton from './BackToLoginButton';

const EmailVerification: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const navigateToEmailCode = () => {
    navigate('/emailcode', { state });
  };

  return (
    <div className={`${emailModule.container}`}>
      <div className={`${emailModule.emailMainContainer}`}>
        <div className={`${emailModule.topContainer}`}>
          <div className={`${emailModule.imageContainer}`}>
            <img className="w-[23.5px] h-[18.5px]" src={EmailIcon}></img>
          </div>
          <div className={`${emailModule.emailHeadingContainer}`}>
            <h1 className={`${emailModule.emailHeading}`}>Check your email</h1>
            <p className={`${emailModule.emailSubHeading}`}>
              We sent a verification link to <br />
              {state?.email ?? ''}
            </p>
          </div>
        </div>
        <div className={`${emailModule.buttonContainer}`} onClick={() => navigateToEmailCode()}>
          <button className={`${emailModule.buttonText}`}>Enter code manually</button>
        </div>
        <EmailResend email={state?.email} />
        <BackToLoginButton />
      </div>
    </div>
  );
};

export default EmailVerification;
