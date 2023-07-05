import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import { Dimension } from 'interfaces/interfaces';
import { normalizeProp } from 'utils/utils';
import { FONT_WEIGHT, BORDER_RADIUS, FONT_SIZE } from '@app/styles/themes/constants';

export interface SelectProps {
  width?: Dimension;
  shadow?: boolean;
}

export const Select = styled(AntSelect).withConfig({
  shouldForwardProp: (prop) => !['shadow', 'width'].includes(prop),
})<SelectProps>`
  width: ${(props) => props.width && normalizeProp(props.width)};

  font-weight: ${FONT_WEIGHT.medium};

  .ant-select-selector {
    height: 44px !important;

    // line-height: 24px !important;
    // padding: 0px !important;
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
    height: 44px;
  }

  .ant-input {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    padding: 10px 14px !important;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .ant-select-selection-item {
    line-height: 24px !important;
    padding: 10px 14px !important;
  }

  .ant-select-selection-placeholder {
    line-height: 44px !important;
    color: #667085;
    font-family: Inter;
  }
`;
