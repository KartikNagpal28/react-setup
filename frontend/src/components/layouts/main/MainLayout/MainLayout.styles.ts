import styled from 'styled-components';
import { Layout } from 'antd';
import { media } from '@app/styles/themes/constants';

export const LayoutMaster = styled(Layout)`
  height: 100vh;
  background-color: #fff;
`;

export const LayoutMain = styled(Layout)`
  background-color: #fff;
  height: 100vh;
  @media only screen and ${media.md} {
    margin-left: 120px;
  }

  @media only screen and ${media.xl} {
    margin-left: unset;
  }
`;
