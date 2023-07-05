import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { Severity } from '@app/interfaces/interfaces';
import { defineColorBySeverity } from '@app/utils/utils';
interface BtnProps {
  $severity?: Severity;
  $noStyle?: boolean;
}

export const Button = styled(AntButton)<BtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 40px;
  ${(props) =>
    props.$noStyle &&
    css`
      width: unset;
      padding: 0;
      height: unset;
    `}

  &[disabled],
  &[disabled]:active,
  &[disabled]:focus,
  &[disabled]:hover {
    color: var(--disabled-color);
  }

  ${(props) =>
    !props.danger &&
    css`
      ${props.$severity &&
      css`
        box-shadow: none;
        text-shadow: none;
        background: rgba(${defineColorBySeverity(props.$severity, true)}, 0.2);

        border-color: ${defineColorBySeverity(props.$severity)};

        color: ${defineColorBySeverity(props.$severity)};

        &:hover {
          background: var(--background-color);

          border-color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);

          color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);
        }

        &:focus {
          background: var(--background-color);

          border-color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);

          color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);
        }
      `}

      ${props.type === 'text' &&
      css`
        &:hover {
          background: transparent;
          color: var(--secondary-color);
        }
      `}

      ${props.type === 'ghost' &&
      css`
        font: normal normal bold 14px/20px Inter !important;
        color: #344054;
        border-radius: 8px;
        border: 1px solid #d0d5dd;
        width: 80px !important;
        &:hover {
          color: #344054;
          border: 1px solid #d0d5dd;
        }
      `}

      ${props.type === 'primary' &&
      css`
        background: #14fda8 !important;
        border-radius: 8px;
        border: 1px solid #14fda8;
        opacity: 1;
        font: normal normal 600 14px/20px 'Inter' !important;
        letter-spacing: 0px;
        color: #030303 !important;
        opacity: 1;
        padding: 10px 16px !important;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05) !important;
        border: 1px solid #14fda8;

        &:hover {
          color: #030303;
          border: 1px solid #14fda8;
        }

        &:focus {
          color: #030303;
        }
      `}

      ${props.type === 'link' &&
      css`
        & span,
        a {
          text-decoration: underline;
        }
      `};
    `}
`;
