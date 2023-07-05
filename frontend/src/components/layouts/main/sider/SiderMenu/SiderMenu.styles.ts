import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';
import arrow from '../../../../../assets/icons/down-arrow.svg';
export const Menu = styled(AntMenu)`
  background: transparent;
  border-right: 0;
  width: 284px;
  

  a {
    width: 100%;
    display: block;
    letter-spacing: -0.38px;
  }

  .ant-menu-submenu-title {
    padding-left: 28px !important;
  }

  .ant-menu-item, ant-menu-submenu {
    text-align: left;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0px;
    color: #000000;
    opacity:1;
    font-weight: 600;
    padding: 10px 15px !important;
  }

  .ant-menu-item {
    margin: 5px 0px !important;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 6px;
  }

  .ant-menu-item-icon {
    // width: 1.25rem;
  }

  .ant-menu-sub {
    .ant-menu-item {
      font-size: 15px;
      line-height: 40px;
      font-weight: 400;
      letter-spacing: 0px;
      color: #000000;
      height: 30px !important;
      margin: 8px 0px !important;
    }
  }

  .ant-menu-sub {
    .ant-menu-item-selected {
      font-weight: 600 !important;
    }
  }

  .ant-menu-submenu-expand-icon,
  .ant-menu-submenu-arrow,
  span[role='img'],
  a,
  background: url(${arrow}) 0% 0% no-repeat padding-box;
  .ant-menu-submenu {
    color: var(--text-sider-secondary-color);
    fill: var(--text-sider-secondary-color);
    overflow: hidden;
  }

  .ant-menu-item:hover {
    .ant-menu-submenu-expand-icon,
    .ant-menu-submenu-arrow,
    span[role='img'],
    a,
    .ant-menu-item-icon,
    .ant-menu-title-content {
      color: #000;
    }

    background: var(--sider-selected-background-color) 0% 0% no-repeat padding-box;
  }

  .ant-menu-submenu:hover {
    color: var(--heading-color)
  }

  .ant-menu-submenu-open {
    .ant-menu-submenu-title {
      margin-bottom: 0px;
      opacity: 1;

      .ant-menu-submenu-expand-icon,
      .ant-menu-submenu-arrow,
      span[role='img'] {
        color: white;
        fill: var(--text-sider-primary-color);
      }
    }
  }

  .ant-menu-submenu .ant-menu-sub {
    background-color: black;
    padding: 10px 0px;
  }

  .ant-menu-submenu .ant-menu-sub .ant-menu-item {
    background-color: black !important;
    a {
      color: #FFFFFF;
      letter-spacing: -0.85px;
    }
  }

  .ant-menu-sub .ant-menu-item-selected a::before {   
    position: absolute;
    left: 0px;
    opacity: 1;
    width: 8px;
  }


  .ant-menu-sub {
    .ant-menu-item-selected a {
      color: #9381FF !important;  
    }
  }

  .ant-menu-item-selected::after,
  .ant-menu-selected::after {
    transform: scaleY(0) !important;
  }

  .ant-menu-item-active,
  .ant-menu-submenu-active .ant-menu-submenu-title {
    opacity: 1;
  }

  .ant-menu-submenu-title:hover {
    color: var(--heading-color);
  }

  .ant-menu {
    background: black;
  }

  .ant-menu-item .ant-menu-item-icon {
    min-width: 18px !important; 
  }

  .ant-menu-submenu {
    background-color: black;
  }

  .ant-menu-item a {
    color: #FFF;
  }

  .ant-menu-title-content {
    color: white;
  }

  .ant-menu-item:hover, .ant-menu-item-selected  {
    background: #667085;

    .ant-menu-item-icon {
      filter: brightness(0) saturate(100%);
    }
  }

  


  .ant-menu-submenu-title:hover {
    background: #14FDA8;
    
  }

  .ant-menu-item-selected .ant-menu-title-content a {
    color: #000000 !important;  
  }

  .ant-menu-item-selected:hover {
    background: #14FDA8;
  }

  .ant-menu-submenu-title {
    height: 40px !important;
  }
`;

// ant-menu-item-active class is active when we hover the cursor on that icon
// ant-menu-item-selected class is active when we select the icon
