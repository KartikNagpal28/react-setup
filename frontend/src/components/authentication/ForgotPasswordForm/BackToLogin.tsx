import React from 'react';
import forgotPasswordModule from './ForgotPassword.module.css';
import backToLoginIcon from '@app/assets/icons/backToLoginIcon.svg';
import { useNavigate } from 'react-router-dom';

const BackToLogin: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={`${forgotPasswordModule.backToLoginContainer}`} onClick={() => navigate('/login')}>
      <span>
        <img src={backToLoginIcon} alt="" />
      </span>
      <button className={`${forgotPasswordModule.backToLogin}`}>Back to log in</button>
    </div>
  );
};

export default BackToLogin;
