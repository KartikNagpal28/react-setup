import styled from 'styled-components';
import { Modal as AntModal } from 'antd';

export const Modal = styled(AntModal)`
  .ant-modal-close {
    right: unset;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ant-modal-close-x {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-modal-close::after {
    content: 'close';
    color: var(--heading-color);
  }

  .ant-modal-header {
    text-align: right;
  }
`;

export {};
