import React from 'react';
import VerifiedIcon from '@app/assets/icons/VerifiedIcon.svg';
import forgotPasswordConfirmModule from './ForgotPasswordConfirm.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { notificationController } from '@app/controllers/notificationController';
import BackToLogin from './BackToLogin';

const ForgotPasswordConfirm: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const auth = () => {};

  return (
    <div className={`${forgotPasswordConfirmModule.container}`}>
      <div className={`${forgotPasswordConfirmModule.emailMainContainer}`}>
        <div className={`${forgotPasswordConfirmModule.topContainer}`}>
          <div className={`${forgotPasswordConfirmModule.imageContainer}`}>
            <img className="w-[23.3px] h-[23.3px]" src={VerifiedIcon}></img>
          </div>
          <div className={`${forgotPasswordConfirmModule.emailHeadingContainer}`}>
            <h1 className={`${forgotPasswordConfirmModule.emailHeading}`}>Password Reset</h1>
            <p className={`${forgotPasswordConfirmModule.emailSubHeading}`}>
              Your password has been successfully reset. <br />
              Click below to log in magically
            </p>
          </div>
        </div>
        <button onClick={() => auth()}>
          <div className={`${forgotPasswordConfirmModule.buttonContainer}`}>
            <div className={`${forgotPasswordConfirmModule.buttonText}`}>Continue</div>
          </div>
        </button>

        <BackToLogin />
      </div>
    </div>
  );
};

export default ForgotPasswordConfirm;
