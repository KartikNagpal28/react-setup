import { notificationController } from '@app/controllers/notificationController';
import React from 'react';
import emailCodeModule from './EmailCode.module.css';

interface EmailResendProps {
  email: string;
}
export const EmailResend: React.FC<EmailResendProps> = ({ email }) => {
  const resend = () => {};
  return (
    <div className="flex">
      <p className={`${emailCodeModule.resendHeading}`}>Didn&rsquo;t receive the email?</p>
      <span className={`${emailCodeModule.resendHeadingColored}`} onClick={() => resend()}>
        &nbsp;Click to resend
      </span>
    </div>
  );
};
