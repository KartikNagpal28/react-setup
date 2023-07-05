import React from 'react';
import backToLoginIcon from '@app/assets/icons/backToLoginIcon.svg';
import emailModule from './EmailVerification.module.css';
import { useNavigate } from 'react-router-dom';

const BackToLoginButton: React.FC = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className={`${emailModule.backToLoginContainer}`} onClick={() => navigateToLogin()}>
      <span>
        <img src={backToLoginIcon} alt="" />
      </span>
      <button className={`${emailModule.backToLogin}`}>Back to log in</button>
    </div>
  );
};

export default BackToLoginButton;
