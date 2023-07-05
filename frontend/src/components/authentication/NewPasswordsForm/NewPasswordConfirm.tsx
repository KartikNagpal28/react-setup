import React from 'react';
import VerifiedIcon from '@app/assets/icons/VerifiedIcon.svg';
import passwordConfirmModule from './NewPasswordConfirm.module.css';
import backToLoginIcon from '@app/assets/icons/backToLoginIcon.svg';

const NewPassworkConfirm: React.FC = () => {
  return (
    <div className={`${passwordConfirmModule.container}`}>
      <div className={`${passwordConfirmModule.emailMainContainer}`}>
        <div className={`${passwordConfirmModule.topContainer}`}>
          <div className={`${passwordConfirmModule.imageContainer}`}>
            <img className="w-[23.3px] h-[23.3px]" src={VerifiedIcon}></img>
          </div>
          <div className={`${passwordConfirmModule.emailHeadingContainer}`}>
            <h1 className={`${passwordConfirmModule.emailHeading}`}>Password Reset</h1>
            <p className={`${passwordConfirmModule.emailSubHeading}`}>
              Your password has been successfully reset. <br />
              Click below to log in magically
            </p>
          </div>
        </div>
        <div className={`${passwordConfirmModule.buttonContainer}`}>
          <button className={`${passwordConfirmModule.buttonText}`}>Continue</button>
        </div>

        <div className={`${passwordConfirmModule.backToLoginContainer}`}>
          <span>
            <img src={backToLoginIcon} alt="" />
          </span>
          <button className={`${passwordConfirmModule.backToLogin}`}>Back to log in</button>
        </div>
      </div>
    </div>
  );
};

export default NewPassworkConfirm;
