import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserModel } from '@app/domain/UserModel';
import * as S from './ProfileInfo.styles';

interface ProfileInfoProps {
  profileData: UserModel | null;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileData }) => {
  const [fullness] = useState(90);

  return profileData ? (
    <S.Wrapper>
      <S.ImgWrapper>
        <Avatar shape="circle" src={profileData?.photoUrl} alt="Profile" />
      </S.ImgWrapper>
      <S.Title>{`${profileData?.firstName} ${profileData?.lastName}`}</S.Title>
      <S.Subtitle>{profileData?.userName}</S.Subtitle>
      <S.FullnessWrapper>
        <S.FullnessLine width={fullness}>{fullness}%</S.FullnessLine>
      </S.FullnessWrapper>
      <S.Text>fullness of your profile</S.Text>
    </S.Wrapper>
  ) : null;
};
