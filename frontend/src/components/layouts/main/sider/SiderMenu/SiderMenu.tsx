import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './SiderMenu.styles';
import { sidebarNavigation, SidebarNavigationItem } from '../sidebarNavigation';
import mainContext from '@app/context/mainContext';
import { Select } from 'antd';
import support from '@app/React-Setup-Images/support.svg';
import setting from '@app/React-Setup-Images/setting.svg';
import { ProfileDropdown } from '@app/components/header/components/profileDropdown/ProfileDropdown/ProfileDropdown';
import { useAppSelector } from '@app/hooks/reduxHooks';
import builderIcon from '@app/assets/icons/builders.svg';

interface SiderContentProps {
  setCollapsed: (isCollapsed: boolean) => void;
  isCollapsed: boolean;
}

const sidebarNavFlat = sidebarNavigation.reduce(
  (result: SidebarNavigationItem[], current) =>
    result.concat(current.children && current.children.length > 0 ? current.children : current),
  [],
);

const SiderMenu: React.FC<SiderContentProps> = ({ setCollapsed, isCollapsed }) => {
  const context = useContext(mainContext);
  const location = useLocation();
  const user = useAppSelector((state) => state.user.user);

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    const currentMenuItem = sidebarNavFlat.find(({ url }) => url === location.pathname);
    const newSelectedKeys = currentMenuItem ? [currentMenuItem.key] : [];
    setSelectedKeys(newSelectedKeys);
  }, [location.pathname]);

  const openedSubmenu = sidebarNavigation.find(({ children }) =>
    children?.some(({ url }) => url === location.pathname),
  );
  const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : [];

  return (
    <>
      <div className="flex flex-col justify-between h-[calc(100vh-180px)]">
        <S.Menu
          mode="inline"
          selectedKeys={selectedKeys}
          defaultOpenKeys={defaultOpenKeys}
          onClick={() => setCollapsed(true)}
          items={sidebarNavigation.map((nav) => {
            const isSubMenu = nav.children?.length;
            return {
              key: nav.key,
              title: nav.title,
              label: isSubMenu ? nav.title : <Link to={nav.url || ''}>{nav.title}</Link>,
              icon: nav.icon,
              children:
                isSubMenu &&
                nav.children &&
                nav.children.map((childNav) => {
                  return {
                    key: childNav.key,
                    label: <Link to={childNav.url || ''}>{childNav.title}</Link>,
                    title: childNav.title,
                    icon: childNav.icon,
                  };
                }),
            };
          })}
        />
        <div className="flex flex-col mx-[26px] gap-8">
          <div className="flex flex-col gap-[20px] ml-[2px] xl:ml-[14px]">
            <div className="flex gap-[14px] cursor-pointer">
              <img src={support} />
              <p
                className={`text-[16px] leading-6 font-semibold text-[#F2F4F7] ${
                  isCollapsed && window.innerWidth < 1280 ? 'invisible' : 'visible'
                }`}
              >
                Support
              </p>
            </div>
            <Link to="/profile">
              <div className="flex gap-[14px] cursor-pointer">
                <img src={setting} />
                <p
                  className={`text-[16px] leading-6 font-semibold text-[#F2F4F7] ${
                    isCollapsed && window.innerWidth < 1280 ? 'invisible' : 'visible'
                  }`}
                >
                  Profile
                </p>
              </div>
            </Link>

            {/* {!user && (
              <div className="flex gap-[14px] cursor-pointer">
                <img src={builderIcon} />
                <Link to="login" className="hover:text-[#F2F4F7] text-[16px] leading-6 font-semibold text-[#F2F4F7]">
                  Sign In
                </Link>
              </div>
            )} */}
            <div className="flex gap-[14px] cursor-pointer">
              <img src={builderIcon} />
              <Link to="login" className="hover:text-[#F2F4F7] text-[16px] leading-6 font-semibold text-[#F2F4F7]">
                Sign In
              </Link>
            </div>
          </div>
          <ProfileDropdown />
        </div>
      </div>
    </>
  );
};

export default SiderMenu;
