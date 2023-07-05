import { DownOutlined } from '@ant-design/icons';
import { media } from '@app/styles/themes/constants';
import styled from 'styled-components';
import { HeaderActionWrapper } from '../../../Header.styles';

export const ProfileDropdownHeader = styled(HeaderActionWrapper)`
  cursor: pointer;
  border-top: 1px solid #475467;

  padding: 24px 8px 0px 8px;
`;

export const DownArrow = styled(DownOutlined)`
  color: var(--text-secondary-color);

  @media only screen and ${media.md} {
    color: var(--text-main-color);
  }
`;
