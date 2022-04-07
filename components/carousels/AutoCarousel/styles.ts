import styled, { keyframes } from "styled-components";

const Scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 32px));
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;

  &::after,
  &::before {
    content: "";

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 2;

    width: 64px;

    background: ${({ theme }) =>
      `linear-gradient(to right, ${theme.colors.black} 0%, ${theme.colors.black}00 100%)`};
  }

  &::after {
    left: unset;
    right: 0;
    transform: rotateZ(180deg);
  }
`;

export const CarouselContainer = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 56px;

  animation: ${Scroll} 60s linear infinite;
`;

export const DataContainer = styled.div`
  position: relative;

  width: 200px;
  height: 150px;
  display: block;
`;
