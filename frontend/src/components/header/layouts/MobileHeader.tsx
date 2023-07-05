import React from 'react';
import { Col, Row } from 'antd';
import { NotificationsDropdown } from '../components/notificationsDropdown/NotificationsDropdown';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown';
import * as S from '../Header.styles';
import tunnelLogo from '@app/assets/logo-light.svg';
import { Link } from 'react-router-dom';
interface MobileHeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSider, isSiderOpened }) => {
  return (
    <div className="flex justify-between  items-center">
      <Link to="/">
        <img src={tunnelLogo}></img>
      </Link>
      <Row justify="space-between" align="middle">
        {/* <Col>
        <ProfileDropdown />
      </Col>

      <Col>
        <Row>
          <Col>
            <NotificationsDropdown />
          </Col>

          <Col>
            <SettingsDropdown />
          </Col>
        </Row>
      </Col> */}

        <S.BurgerCol>
          <S.MobileBurger onClick={toggleSider} isCross={isSiderOpened} />
        </S.BurgerCol>
      </Row>
    </div>
  );
};
