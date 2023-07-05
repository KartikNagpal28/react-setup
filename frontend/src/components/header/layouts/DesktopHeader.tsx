import React from 'react';
import { Col, Row } from 'antd';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown';
import * as S from '../Header.styles';
import check from '@app/Images/Check-Sqaure.svg';
interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
  const leftSide = isTwoColumnsLayout ? (
    <S.SearchColumn xl={16} xxl={17}>
      <Row justify="space-between">
        <Col xl={15} xxl={12}>
          {/* <HeaderSearch /> */}
        </Col>
        <Col>{/* <S.GHButton /> */}</Col>
      </Row>
    </S.SearchColumn>
  ) : (
    <>
      <Col lg={10} xxl={8}>
        {/* <HeaderSearch /> */}
      </Col>
      <Col>{/* <S.GHButton /> */}</Col>
    </>
  );

  return (
    <Row justify="space-between" align="middle">
      {/* {leftSide}

      <S.ProfileColumn xl={12} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
        <Row align="middle" justify="end" gutter={[10, 10]}>
          <Col style={{ display: 'flex', width: '211px', borderRight: '1px solid #ddd9d9', opacity: '1' }}>
            <S.LogoContainer>
              <img src={check} alt="" />
              <p>Tunnel&apos;s</p>
            </S.LogoContainer>
          </Col>
          <Col>
            <Row gutter={[{ xxl: 10 }, { xxl: 10 }]}>
              <Col>
                <SettingsDropdown />
              </Col>
            </Row>
          </Col>

          <Col>
            <ProfileDropdown />
          </Col>
        </Row>
      </S.ProfileColumn> */}
    </Row>
  );
};
