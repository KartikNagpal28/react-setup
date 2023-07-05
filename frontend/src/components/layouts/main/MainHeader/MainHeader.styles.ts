import { LAYOUT } from '@app/styles/themes/constants';
import { media } from '@app/styles/themes/constants';
import { Layout } from 'antd';
import styled, { css } from 'styled-components';
import HorizontalBgImg from '@app/assets/images/black-checked-bg.svg';

interface Header {
  $isTwoColumnsLayoutHeader: boolean;
}

export const Header = styled(Layout.Header)<Header>`
  display: none;
  line-height: 1.5;
  background: url(${HorizontalBgImg});
  background-size: cover;
  background-position: bottom right;
  border-bottom: 1px solid #eaecf0;
  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};
  }

  @media screen and (max-width: 849px) {
    display: block;
  }

  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
