import React, { useEffect, useState } from 'react';
import EmailIcon from '@app/assets/icons/EmailIcongreen.svg';
import emailCodeModule from './EmailCode.module.css';
import { notificationController } from '@app/controllers/notificationController';
import { EmailResend } from './EmailResend';
import { useLocation, useNavigate } from 'react-router-dom';
import BackToLoginButton from './BackToLoginButton';

const EmailCode: React.FC = () => {
  const { state, search } = useLocation();
  const navigate = useNavigate();

  const [code, setCode] = useState<(number | null)[]>([null, null, null, null]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Get params
    const params = new URLSearchParams(search);
    const email = params.get('email');
    const code = params.get('code');
    if (email === null || code === null) {
      return;
    }
    // Code to number
    const codeNum = parseInt(code, 10);
    if (isNaN(codeNum)) {
      return;
    }
    // Send to API
    setLoading(true);
  }, [search, setLoading, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const value = e.target.value === '' ? null : parseInt(e.target.value, 10);
    if (value !== null && (isNaN(value) || value < 0 || value > 9)) {
      return;
    }
    const newCode = [...code];
    newCode[i] = value;
    setCode(newCode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const codeFiltered: number[] = code.filter((x) => x !== null) as number[]; // Filter out nulls
    if (state?.email === null) {
      return;
    }
  };

  if (loading) {
    return <>Processing...</>;
  }

  return (
    <div className={`${emailCodeModule.container}`}>
      <div className={`${emailCodeModule.emailMainContainer}`}>
        <div className={`${emailCodeModule.topContainer}`}>
          <div className={`${emailCodeModule.imageContainer}`}>
            <img className="w-[23.5px] h-[18.5px]" src={EmailIcon}></img>
          </div>
          <div className={`${emailCodeModule.emailHeadingContainer}`}>
            <h1 className={`${emailCodeModule.emailHeading}`}>Check your email</h1>
            <p className={`${emailCodeModule.emailSubHeading}`}>
              We sent a verification link to <br />
              {state?.email ?? ''}
            </p>
          </div>
        </div>
        <form className={`${emailCodeModule.formContainer}`} onSubmit={handleSubmit}>
          <div className={`${emailCodeModule.codeInputs}`}>
            {[1, 2, 3, 4].map((value, index) => (
              <input
                key={`input-${value}`}
                onChange={(e) => handleChange(e, index)}
                value={code[index] ?? ''}
                className={`${emailCodeModule.codeInput}`}
                inputMode="numeric"
                required
              />
            ))}
          </div>
          <button>
            <div className={`${emailCodeModule.buttonContainer}`}>
              <button className={`${emailCodeModule.buttonText}`}>Verify email</button>
            </div>
          </button>
        </form>
        <EmailResend email={state?.email} />
        <BackToLoginButton />
      </div>
    </div>
  );
};

export default EmailCode;
