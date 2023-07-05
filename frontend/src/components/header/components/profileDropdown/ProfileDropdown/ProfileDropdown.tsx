import React from 'react';
import { Avatar, Col, Row } from 'antd';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ProfileDropdown.styles';
import logoutIcon from '@app/assets/icons/logout.svg';
import { Link } from 'react-router-dom';
import defaultImg from '@app/assets/images/defaultImage.png';

const defaultImageUrl = defaultImg;

const imgStyle: any = {
  img1: {
    width: '20px',
    height: 'auto',
    objectFit: 'cover',
  },
};

export const ProfileDropdown: React.FC = () => {
  const { isTablet, isMobile } = useResponsive();
  const user = useAppSelector((state) => state.user.user);
  const firstName = user?.firstName || '';
  const lastName = user?.lastName || '';
  const styling: any = {
    name: {
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: '500',
      color: '#f2f4f7',
      lineHeight: '20px',
    },

    heading: {
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: '400',
      color: '#f2f4f7',
      lineHeight: '20px',
    },
  };
  const photo = user?.photoUrl || defaultImageUrl;

  return user ? (
    <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle">
      <div className="flex">
        <Col>
          <Link to="/profile">
            <Avatar src={photo} alt="User" shape="circle" size={40} />
          </Link>
        </Col>

        {isTablet && (
          <Col>
            <Link to="/profile">
              <div className="flex gap-1 w-[180px]">
                <h6 style={styling.name}>{`${firstName}`}</h6>
                <h6 style={styling.name}>{`${lastName}`}</h6>
              </div>
              <h6 style={styling.heading}>{user.email}</h6>
            </Link>
          </Col>
        )}

        {isMobile && !isTablet && firstName !== '' && (
          <Col>
            <h6 className="mt-2 mr-[9rem]" style={{ ...styling.name }}>{`${firstName}`}</h6>
          </Col>
        )}

        {isMobile && !isTablet && firstName === '' && (
          <Col>
            <h6 className="mt-2 mr-[3rem]" style={{ ...styling.heading }}>{`${user.email}`}</h6>
          </Col>
        )}

        <div className="mt-[0.6rem] w-4 h-4">
          <Link to="/logout">
            <img src={logoutIcon} alt="" style={imgStyle.img1} />
          </Link>
        </div>
      </div>
    </S.ProfileDropdownHeader>
  ) : null;
};
