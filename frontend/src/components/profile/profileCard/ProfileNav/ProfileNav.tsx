import React from 'react';
import { profileNavData } from '@app/constants/profileNavData';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ProfileNav.styles';

export const ProfileNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.Wrapper>
      {profileNavData.map((item) => (
        <S.Btn
          key={item.id}
          icon={item.icon}
          type="text"
          color={item.color}
          onClick={() => navigate(item.href)}
          isActive={`/profile/${item.href}` === location.pathname}
        >
          {item.name}
        </S.Btn>
      ))}
    </S.Wrapper>
  );
};
