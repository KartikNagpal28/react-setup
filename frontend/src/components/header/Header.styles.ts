import styled, { css } from 'styled-components';
import { Col, Collapse } from 'antd';
import { BurgerIcon } from '@app/components/common/Burger/BurgerIcon';
import { LAYOUT, media } from '@app/styles/themes/constants';

export const HeaderActionWrapper = styled.div`
  cursor: pointer;

  & > .ant-btn > span[role='img'],
  .ant-badge {
    font-size: 1.25rem;

    @media only screen and ${media.md} {
      font-size: 1.625rem;
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 181px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border: 1px solid #efefef;
  border-radius: 13px;
  opacity: 1;

  img {
    margin-right: 8px;
    background: transparent 0% 0% no-repeat padding-box;
    width: 25px;
    height: 23px;
  }

  p {
    margin: 0;
    text-align: left;
    font: normal normal bold 16px/18px Ubuntu;
    letter-spacing: 0px;
    color: #594da4;
    opacity: 1;
    width: 86px;
    height: 18px;
  }
`;

export const BorderRight = styled.div`
  border-right: 1px solid black;
`;

export const DropdownCollapse = styled(Collapse)`
  & > .ant-collapse-item > .ant-collapse-header {
    font-weight: 600;
    font-size: 0.875rem;

    color: var(--primary-color);

    @media only screen and ${media.md} {
      font-size: 1rem;
    }
  }

  & > .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: default;

    & > span[role='img'] {
      display: none;
    }
  }
`;

export const BurgerCol = styled(Col)`
  z-index: 999;
  display: flex;
`;

export const MobileBurger = styled(BurgerIcon)`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: -0.5rem;
  color: var(--text-main-color);

  ${(props) =>
    props.isCross &&
    css`
      color: var(--text-secondary-color);
    `};
`;

export const SearchColumn = styled(Col)`
  padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
`;

interface ProfileColumn {
  $isTwoColumnsLayout: boolean;
}

export const ProfileColumn = styled(Col)<ProfileColumn>`
  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        background-color: var(--sider-background-color);
        padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
      `}
  }
`;
