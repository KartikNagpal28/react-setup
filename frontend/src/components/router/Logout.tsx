import React, { useEffect } from 'react';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { Navigate } from 'react-router-dom';

const Logout: React.FC = () => {
  return <Navigate to="/login" replace />;
};

export default Logout;
