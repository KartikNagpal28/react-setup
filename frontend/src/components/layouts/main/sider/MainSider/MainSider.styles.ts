import styled, { css } from 'styled-components';
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { media } from '@app/styles/themes/constants';
import { LAYOUT } from '@app/styles/themes/constants';
import VerticalBgImg from '@app/assets/images/black-checked-bg-vertical.svg';

export const Sider = styled(Layout.Sider)`
  background-image: url(${VerticalBgImg});
  background-size: cover;
  background-position: top left;
  position: fixed;
  overflow: visible;
  right: 0;
  z-index: 5;
  // min-height: 100vh;
  max-height: 100vh;

  color: var(--text-secondary-color);
  box-shadow: 0px 3px 6px #00000029;

  margin: 20px;
  border-radius: 10px;
  height: calc(100vh - 40px);

  @media only screen and ${media.md} {
    right: unset;
    left: 0;
  }

  @media only screen and ${media.xl} {
    position: unset;
  }
  @media screen and (max-width: 849px) and (min-width: 375px) {
    margin: 0 0 15px 0;
  }
`;

export const CollapseButton = styled(Button)<{ $isCollapsed: boolean }>`
  background: var(--collapse-background-color);
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
  position: absolute;
  right: 0.5rem;

  ${(props) =>
    props.$isCollapsed &&
    css`
      right: -1rem;
    `}

  color: var(--text-secondary-color);

  &:hover {
    color: var(--text-secondary-color);
    background: var(--primary-color);
    border: 1px solid var(--border-color);
  }

  &:focus {
    color: var(--text-secondary-color);
    background: var(--primary-color);
    border: 1px solid var(--border-color);
  }
`;

export const SiderContent = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - ${LAYOUT.mobile.headerHeight});

  @media only screen and ${media.md} {
    max-height: calc(100vh - ${LAYOUT.desktop.headerHeight});
  }
`;

export const SiderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const SiderLogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
  margin-bottom: 24px;
  margin-top: 32px;
  margin-left: 20px;
  width: 142px;
  height: 32px;

  @media only screen and ${media.md} {
    // height: ${LAYOUT.desktop.headerHeight};
  }
`;

export const BrandSpan = styled.span`
  margin: 0 15.45px;
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--sider-logo-text-color);
  letter-spacing: -0.9px;
  font: normal normal bold 18px/32px Ubuntu;
`;
