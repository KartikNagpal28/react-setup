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

  // box-shadow: ${(props) => props.shadow && 'var(--box-shadow)'};

  &.ant-select-borderless {
    background: var(--secondary-background-color);
    border-radius: ${BORDER_RADIUS};
  }

  .ant-select-selection-placeholder {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-style: normal;
    padding: 10px 14px;
    color: #667085;

    right: 0;
    left: 0;
  }

  .ant-select-selector {
    height: 48px !important;
  }

  .ant-select-arrow {
    color: var(--text-main-color);
    fill: var(--text-main-color);
  }

  &.ant-select-multiple.ant-select-sm .ant-select-selection-item {
    height: 0.875rem;
    line-height: ${FONT_SIZE.xs};
    font-size: ${FONT_SIZE.xs};
    margin-top: 0.1875rem;
    margin-bottom: 0.1875rem;
  }

  &.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    color: var(--disabled-color);
  }

  .ant-select-clear {
    color: var(--disabled-color);
  }
  .ant-select-selection-item-remove {
    color: var(--icon-color);
    &:hover {
      color: var(--icon-hover-color);
    }
  }
  .ant-select-item-option-disabled {
    color: var(--disabled-color);
  }

  // .ant-select-selection-item {
  //   font: normal normal 600 12px/18px 'Inter';
  //   letter-spacing: 0px;
  //   color: var(--text-main-color);
  //   opacity: 1;
  //   line-height: 18px !important;
  // }

  // .ant-select-selection-item {
  //   line-height: 24px !important;
  //   padding: 10px 14px !important;
  // }

  // .ant-select-selector {
  //   padding: 0px !important;
  // }
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 10px !important;
  }
  background: var(--text-main-color) 0% 0% no-repeat padding-box;
  // box-shadow: 0px 3px 50px #00000012;
  border-radius: 12px;
  opacity: 1;
`;
