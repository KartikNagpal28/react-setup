import React from 'react';
import VerifiedIcon from '@app/assets/icons/VerifiedIcon.svg';
import emailConfirmModule from './EmailVerifiedConfirm.module.css';
import BackToLoginButton from './BackToLoginButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { notificationController } from '@app/controllers/notificationController';
import { useAppDispatch } from '@app/hooks/reduxHooks';

const EmailVerifiedConfirm: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useAppDispatch();

  const auth = () => {};

  return (
    <div className={`${emailConfirmModule.container}`}>
      <div className={`${emailConfirmModule.emailMainContainer}`}>
        <div className={`${emailConfirmModule.topContainer}`}>
          <div className={`${emailConfirmModule.imageContainer}`}>
            <img className="w-[23.3px] h-[23.3px]" src={VerifiedIcon}></img>
          </div>
          <div className={`${emailConfirmModule.emailHeadingContainer}`}>
            <h1 className={`${emailConfirmModule.emailHeading}`}>Email verified</h1>
            <p className={`${emailConfirmModule.emailSubHeading}`}>
              Your email has been successfully verified. <br />
              Click below to log in magically
            </p>
          </div>
        </div>
        <div className={`${emailConfirmModule.buttonContainer}`} onClick={() => auth()}>
          <button className={`${emailConfirmModule.buttonText}`}>Continue</button>
        </div>
        <BackToLoginButton />
      </div>
    </div>
  );
};

export default EmailVerifiedConfirm;
