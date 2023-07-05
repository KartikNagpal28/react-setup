import { createGlobalStyle } from 'styled-components';
import { resetCss } from './resetCss';
import { BREAKPOINTS, FONT_SIZE, FONT_WEIGHT, media } from './themes/constants';
import { lightThemeVariables, commonThemeVariables, antOverrideCssVariables } from './themes/themeVariables';

export default createGlobalStyle`

  ${resetCss}

  [data-theme='light'],   [data-theme='dark'] 
  :root {
    ${lightThemeVariables}
  }

  :root {
    ${commonThemeVariables};
    ${antOverrideCssVariables};
  } 

  [data-no-transition] * {
    transition: none !important;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 37px;
  }

  // added for showconfirm message edit
  .ant-modal-confirm-body {
    height: 40px;
    display: flex;
    align-items: center;
  }

  .ant-modal-confirm-btns:hover {
    color: #000;
    border: none;
  }

  .ant-btn-primary {
    background-color: #14FDA8 !important;
    border: 1px solid #14FDA8 !important;
  }

  .ant-modal-confirm-body .ant-modal-confirm-title {
    color: #000;
  }

  .ant-select-multiple .ant-select-selector {
  padding: 0px 12px !important;
  }
  
  .ant-select .ant-select-multiple .ant-select-allow-clear .ant-select-show-search {
    margin-bottom: 20px;
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px;
  }

  .ant-select-multiple {
    .ant-select-selector {
      height: unset !important;
    }
  }

  .ant-modal-close {
    margin-top: 15px;
    margin-right: 5px;
  }
  
  .range-picker {
    & .ant-picker-panels {
      @media only screen and ${media.xs} and (max-width: ${BREAKPOINTS.md - 0.02}px) {
        display: flex;
      flex-direction: column;
      }
    }
  }

  .search-overlay {
    box-shadow: var(--box-shadow);

    @media only screen and ${media.xs} and (max-width: ${BREAKPOINTS.md - 0.02}px)  {
      width: calc(100vw - 16px);
    max-width: 600px;
    }

    @media only screen and ${media.md} {
      width: 323px;
    }
  }

  a {
    color: var(--primary-color);
    &:hover,:active {
      color: var(--ant-primary-color-hover);
    }
  }
  
  .ant-picker-cell {
    color: var(--text-main-color);
  }

  .ant-picker-cell-in-view .ant-picker-calendar-date-value {
    color: var(--text-main-color);
    font-weight: ${FONT_WEIGHT.bold};
  }

  .ant-picker svg {
    color: var(--text-light-color);
  }

  .ant-menu-root.ant-menu-inline {
    margin: 0px 14px;
  }

  .ant-input-disabled, .ant-input[disabled]{
    background-color: #EAECF0;
    border-color: #EAECF0;
  }

  // notifications start
  .ant-notification-notice {
    width: 36rem;
    padding: 2rem;
    min-height: 6rem;
    
    .ant-notification-notice-with-icon .ant-notification-notice-message {
      margin-bottom: 0;
      margin-left: 2.8125rem;
    }

    .ant-notification-notice-with-icon .ant-notification-notice-description {
      margin-left: 4.375rem;
      margin-top: 0;
    }

    .ant-notification-notice-icon {
      font-size: 2.8125rem;
      margin-left: 0
    }

    .ant-notification-notice-close {
      top: 1.25rem;
      right: 1.25rem;
    }

    .ant-notification-notice-close-x {
      display: flex;
      font-size: 0.9375rem;
    }

    .notification-without-description {
      .ant-notification-notice-close {
        top: 1.875rem;
      }
      .ant-notification-notice-with-icon .ant-notification-notice-description  {
        margin-top: 0.625rem;
      }
    }
    
    .title {
      font-size: ${FONT_SIZE.xxl};
      height: 3rem;
      margin-left: 1.5rem;
      display: flex;
      align-items: center;
      font-weight: ${FONT_WEIGHT.bold};

      &.title-only {
        color: var(--text-main-color);
        font-size: ${FONT_SIZE.md};
        height: 2rem;
        line-height: 2rem;
        margin-left: 0.75rem;
        font-weight: ${FONT_WEIGHT.semibold};
      }
  }
  
    .description {
      color: #404040;
      font-size: ${FONT_SIZE.md};
      font-weight: ${FONT_WEIGHT.semibold};
      line-height: 1.375rem;
    }
  
    &.ant-notification-notice-success {
      border: 1px solid var(--success-color);
      background: var(--notification-success-color);
      
      .title {
        color: var(--success-color);
      }
    }
  
    &.ant-notification-notice-info {
      border: 1px solid var(--primary-color);
      background: var(--notification-primary-color);
  
      .title {
        color: var(--primary-color);
      }
    }
  
    &.ant-notification-notice-warning {
      border: 1px solid var(--warning-color);
      background: var(--notification-warning-color);
  
      .title {
        color: var(--warning-color);
      }
    }
  
    &.ant-notification-notice-error {
      border: 1px solid var(--error-color);
      background: var(--notification-error-color);
  
      .title {
        color: var(--error-color);
      }
    }
  
    .success-icon {
      color: var(--success-color);
    }
  
    .info-icon {
      color: var(--primary-color);
    }
  
    .warning-icon {
      color: var(--warning-color);
    }
  
    .error-icon {
      color: var(--error-color);
    }
  }
  
  .ant-menu-inline, .ant-menu-vertical {
    border-right: 0;
  }
  // notifications end

  //default padding removed to set the header
  #main-content {
    padding: 0;
}
`;
