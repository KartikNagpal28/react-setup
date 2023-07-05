import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const Input = styled(AntInput)`
  .ant-input-group-addon:first-child,
  .ant-input-group-addon:last-child {
    min-width: 5.5rem;
    color: #667085 !important;
    font-weight: 500;
    font-size: 16px;
  }

  .ant-input-group-addon .ant-select {
    .ant-select-selection-item {
      min-width: 5.5rem;
      color: #667085 !important;
      font-weight: 500;
      font-size: 16px;
    }
  }

  .ant-select-arrow {
    color: var(--disabled-color);
  }
`;
