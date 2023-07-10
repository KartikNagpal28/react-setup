import React, { useEffect, useState, useContext } from 'react';
import MainSider from '../sider/MainSider/MainSider';
import MainContent from '../MainContent/MainContent';
import * as S from './MainLayout.styles';
import { Outlet } from 'react-router-dom';
import { notificationController } from '@app/controllers/notificationController';
import mainContext from '@app/context/mainContext';
import { MainHeader } from '../MainHeader/MainHeader';
import { Header } from '@app/components/header/Header';

const MainLayout: React.FC = () => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(false);
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);
  async function getLoginUserDetail() {
    try {
    } catch (err: any) {
      notificationController.error({ message: err?.data?.message });
    }
  }
  if (localStorage.getItem('token')) {
    useEffect(() => {
      getLoginUserDetail();
    }, []);
  }

  return (
    <S.LayoutMaster>
      <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <S.LayoutMain>
        <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
          <Header toggleSider={toggleSider} isSiderOpened={!siderCollapsed} isTwoColumnsLayout={isTwoColumnsLayout} />
        </MainHeader>
        <MainContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
          <div>
            <Outlet />
          </div>
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
