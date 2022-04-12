import styled, { css } from "styled-components";

import BrazilSvg from "../../../public/svg/brazil-map.svg";
import UsaSvg from "../../../public/svg/usa-map.svg";

type MapProps = {
  $animate?: boolean;
  $shouldAnimate?: boolean;
};

type StepsContainerProps = {
  $animate?: boolean;
};

export const Step = styled.li`
  position: relative;

  height: 88px;
  padding-left: 65px;
  display: flex;
  align-items: center;

  font-family: "Roboto Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.8rem;

  counter-increment: how-it-works-counter;

  &::before,
  &::after {
    content: counter(how-it-works-counter);

    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 1;

    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: block;

    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.black};

    font-family: "Oswald", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    line-height: 35px;
  }

  &::after {
    background-color: ${({ theme }) => theme.colors.blue};

    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: clip-path 0.2s linear;
  }

  & + & {
    margin-top: 50px;
  }
`;

export const StepsContainer = styled.ol<StepsContainerProps>`
  position: relative;

  width: 100%;
  padding-inline-start: 0;
  padding: 45px 0 90px;
  margin: 0;

  list-style: none;
  counter-reset: how-it-works-counter;

  &::before,
  &::after {
    content: ".................";

    position: absolute;
    top: 285px;
    left: -265px;
    transform: rotate(90deg);

    color: ${({ theme }) => theme.colors.darkGray};

    font-family: "Roboto Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 40px;
    letter-spacing: 24px;
  }

  &::after {
    color: ${({ theme }) => theme.colors.blue};

    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    transition: clip-path 4s linear 2s;

    ${({ $animate }) =>
      $animate &&
      css`
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      `}
  }

  ${({ $animate }) =>
    $animate &&
    css`
      & > li {
        &::after {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        &:nth-child(1)::after {
          transition-delay: 2.5s;
        }

        &:nth-child(2)::after {
          transition-delay: 3.5s;
        }

        &:nth-child(3)::after {
          transition-delay: 4.5s;
        }

        &:nth-child(4)::after {
          transition-delay: 5.2s;
        }
      }
    `}
`;

export const BrazilMap = styled(BrazilSvg)<MapProps>`
  position: absolute;
  top: -80px;
  left: 0;
  transform: translateX(-30%);

  fill: ${({ theme }) => theme.colors.darkGray};

  ${({ $shouldAnimate }) =>
    $shouldAnimate &&
    css`
      fill: ${({ theme }) => theme.colors.blue};

      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      transition: clip-path 2s;
    `}

  ${({ $animate }) =>
    $animate &&
    css`
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    `}
`;

export const UsaMap = styled(UsaSvg)<MapProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(-30%);

  fill: ${({ theme }) => theme.colors.darkGray};

  ${({ $shouldAnimate }) =>
    $shouldAnimate &&
    css`
      fill: ${({ theme }) => theme.colors.blue};

      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      transition: clip-path 1s linear 6s;
    `}

  ${({ $animate }) =>
    $animate &&
    css`
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    `}
`;
