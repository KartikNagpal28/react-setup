import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ProfileOverlay.styles';

export const ProfileOverlay: React.FC = ({ ...props }) => {
  return (
    <div {...props}>
      {/* <S.Text>
        <Link to="/profile">Profile</Link>
      </S.Text> */}
      <S.Text>
        <Link to="/logout">Logout</Link>
      </S.Text>
      <S.Text>
        <Link to="/profile">Profile</Link>
      </S.Text>
    </div>
  );
};
