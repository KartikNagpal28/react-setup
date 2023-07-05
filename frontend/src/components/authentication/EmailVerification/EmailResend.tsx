import { resendEmail } from '@app/api/emailverification.api';
import { notificationController } from '@app/controllers/notificationController';
import React from 'react';
import emailCodeModule from './EmailCode.module.css';

interface EmailResendProps {
  email: string;
}
export const EmailResend: React.FC<EmailResendProps> = ({ email }) => {
  const resend = () => {
    resendEmail({ email })
      .then(() => {
        notificationController.success({ message: 'New verification email sent' });
      })
      .catch((err) => {
        notificationController.error({ message: err?.data?.message });
      });
  };
  return (
    <div className="flex">
      <p className={`${emailCodeModule.resendHeading}`}>Didn&rsquo;t receive the email?</p>
      <span className={`${emailCodeModule.resendHeadingColored}`} onClick={() => resend()}>
        &nbsp;Click to resend
      </span>
    </div>
  );
};
