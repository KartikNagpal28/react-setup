import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from '@app/hooks/reduxHooks';
// no lazy loading for auth pages to avoid flickering
const AuthLayout = React.lazy(() => import('@app/components/layouts/AuthLayout/AuthLayout'));
import LoginPage from '@app/pages/LoginPage';

//tunnel
import RegisterPage from '@app/pages/RegisterPage';

import MainLayout from '@app/components/layouts/main/MainLayout/MainLayout';
import RequireAuth from '@app/components/router/RequireAuth';
import { withLoading } from '@app/hocs/withLoading.hoc';

import ProfilePage from '@app/pages/ProfilePages/Profile';
import Home from '@app/pages/Home/Home';
import UserPage from '@app/pages/UserPages/UserPage';
import MyProfilePage from '@app/pages/MyProfilePages/MyProfilePage';
import EmailVerification from '../authentication/EmailVerification/EmailVerification';
import EmailVerifiedConfirm from '../authentication/EmailVerification/EmailVerifiedConfirm';
import EmailVerificationPage from '@app/pages/EmailVerificationPage/EmailVerificationPage';
import EmailVerifiedConfirmPage from '@app/pages/EmailVerificationPage/EmailVerifiedConfirmation';
import EmailCodePage from '@app/pages/EmailVerificationPage/EmailCodePage';
import ForgotPasswordLinkPage from '@app/pages/PasswordResetPages/ForgotPasswordLinkPage';
import NewPasswordConfirmPage from '@app/pages/PasswordResetPages/NewPasswordConfirmPage';
import ForgotPasswordPage from '@app/pages/PasswordResetPages/ForgotPasswordPage';
import NewPasswordPage from '@app/pages/PasswordResetPages/NewPasswordPage';
import ForgotPasswordResetPage from '@app/pages/PasswordResetPages/ForgotPasswordResetPage';
import ForgotPasswordConfirmPage from '@app/pages/PasswordResetPages/ForgotPasswordConfirmPage';

const ServerErrorPage = React.lazy(() => import('@app/pages/ServerErrorPage'));
const Error404Page = React.lazy(() => import('@app/pages/Error404Page'));
const Logout = React.lazy(() => import('./Logout'));

const ServerError = withLoading(ServerErrorPage);
const Error404 = withLoading(Error404Page);

const AuthLayoutFallback = withLoading(AuthLayout);
const LogoutFallback = withLoading(Logout);

export const AppRouter: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  // const protectedLayout = (
  //   <RequireAuth>
  //     <MainLayout />
  //   </RequireAuth>
  // );

  const protectedLayout = <MainLayout />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={protectedLayout}>
          {/* <Route index element={<MyProfilePage />} /> */}
          <Route index element={<UserPage />} />
          {user && user.builderId ? (
            <Route path="profile" element={<MyProfilePage />} />
          ) : (
            <Route path="profile" element={<MyProfilePage />} />
          )}

          <Route path="server-error" element={<ServerError />} />
          <Route path="404" element={<Error404 />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="builder" element={<UserPage />} />
          <Route path="myprofile" element={<MyProfilePage />} />
        </Route>

        <Route path="/logout" element={<LogoutFallback />} />
        <Route path="signup" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="emailverification" element={<EmailVerificationPage />} />
        <Route path="verified" element={<EmailVerifiedConfirmPage />} />
        <Route path="emailcode" element={<EmailCodePage />} />
        <Route path="forgotpasswordlink" element={<ForgotPasswordLinkPage />} />
        <Route path="passwordconfirm" element={<NewPasswordConfirmPage />} />
        <Route path="forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="newpassword" element={<NewPasswordPage />} />
        <Route path="forgotpasswordreset" element={<ForgotPasswordResetPage />} />
        <Route path="forgotpasswordconfirm" element={<ForgotPasswordConfirmPage />} />
      </Routes>
    </BrowserRouter>
  );
};
