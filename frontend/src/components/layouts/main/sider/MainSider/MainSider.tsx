import React, { useMemo } from 'react';
import Overlay from '../../../../common/Overlay';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './MainSider.styles';
import { SiderLogo } from '../SiderLogo';
import SiderMenu from '../SiderMenu/SiderMenu';
import logo from '@app/Images/logo.svg';
import whitelogo from '@app/Images/whitelogo.svg';

interface MainSiderProps {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {
  const { isDesktop, mobileOnly, tabletOnly } = useResponsive();

  const isCollapsible = useMemo(() => mobileOnly && tabletOnly, [mobileOnly, tabletOnly]);

  const toggleSider = () => setCollapsed(!isCollapsed);

  return (
    <>
      <S.Sider
        trigger={null}
        collapsed={!isDesktop && isCollapsed}
        collapsedWidth={tabletOnly ? 80 : 0}
        collapsible={isCollapsible}
        width={312}
        {...props}
      >
        <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <S.SiderContent>
          <SiderMenu setCollapsed={setCollapsed} isCollapsed={isCollapsed} />
        </S.SiderContent>
        {/* {(!isCollapsed || isDesktop) && <BottomLogo />} */}
      </S.Sider>
      {mobileOnly && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  );
};

export default MainSider;

const BottomLogo: React.FC = () => {
  const theme = window.localStorage.getItem('theme');

  const imgStyle: any = {
    margin: 'auto',
    position: 'absolute',
    bottom: '10px',
    left: '28px',
  };

  return (
    <>
      <img src={theme === 'dark' ? whitelogo : logo} alt="" style={imgStyle} />
    </>
  );
};
