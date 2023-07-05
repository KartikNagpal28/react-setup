import React from 'react';
import * as S from './MainSider/MainSider.styles';
import { RightOutlined } from '@ant-design/icons';
import { useResponsive } from 'hooks/useResponsive';
import tunnelLogo from '@app/assets/logo-light.svg';
import { useAppSelector } from '@app/hooks/reduxHooks';
import tunnel from '@app/assets/tunnel.png';

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = ({ isSiderCollapsed, toggleSider }) => {
  const { tabletOnly } = useResponsive();

  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to="/">
        {isSiderCollapsed && window.innerWidth < 1280 ? (
          <img src={tunnel} alt="Tunnel" className="ml-1" />
        ) : (
          <img src={tunnelLogo} alt="Tunnel" />
        )}
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
          shape="circle"
          size="small"
          $isCollapsed={isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  );
};
