import React from 'react';
import styled, { css } from 'styled-components';

interface BurgerProps {
  className?: string;
  onClick: () => void;
}
export const Burger: React.FC<BurgerProps> = ({ className, onClick }) => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 20 14"
    className={className}
    onClick={onClick}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 7H19M1 1H19M7 13H19" stroke="#F2F4F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BurgerIcon = styled(Burger)<{ isCross: boolean }>`
  cursor: pointer;
  transform: translate3d(0, 0, 0);

  path {
    fill: none;
    transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25),
      stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
    // stroke-width: 30px;
    stroke-linecap: round;
    // stroke: currentColor;
    stroke-dashoffset: 0;

    &#top,
    &#bottom {
      stroke-dasharray: 240px 950px;
    }
    &#middle {
      stroke-dasharray: 240px 240px;
    }

    ${(props) =>
      props.isCross &&
      css`
        &#top,
        &#bottom {
          stroke-dashoffset: -650px;
        }
        &#middle {
          stroke-dashoffset: -115px;
          stroke-dasharray: 1px 220px;
        }
      `}
  }
`;
