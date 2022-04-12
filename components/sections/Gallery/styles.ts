import styled from "styled-components";

type VideoContainerProps = {
  isVideoVisible: boolean;
};

export const VideoImage = styled.div`
  position: absolute;
  inset: 0;
`;

export const VideoButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    z-index: 2;

    transition: transform 0.2s;

    path {
      fill: ${({ theme }) => theme.colors.black} !important;
    }
  }

  &::after {
    content: "";

    position: absolute;
    inset: -20px;
    z-index: 0;

    border-radius: 50%;

    background-image: url("data:image/svg+xml,%3csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%' height='100%' fill='none' rx='100' ry='100' stroke='white' stroke-width='4' stroke-dasharray='100%2c 80' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");

    transition: transform 1s;
  }

  &::before {
    content: "";

    position: absolute;
    inset: -5px;
    z-index: -1;

    border-radius: 50%;

    background-color: rgba(255, 255, 255, 0.5);
    border: 2px solid transparent;

    transition: inset 0.75s, border-color 0.3s linear 0s;
  }
`;

export const VideoContainer = styled.div<VideoContainerProps>`
  position: relative;

  display: block;

  height: 618px;

  cursor: pointer;

  & > iframe {
    visibility: ${({ isVideoVisible }) => (isVideoVisible ? "visible" : "hidden")};
  }

  & > ${VideoButton}, ${VideoImage} {
    visibility: ${({ isVideoVisible }) => (isVideoVisible ? "hidden" : "visible")};
  }

  &:hover {
    & > ${VideoButton} {
      &::after {
        transform: rotate(360deg);
      }

      &::before {
        inset: -20px;

        border-color: white;

        transition: inset 0.75s, border-color 0.3s linear 0.3s;
      }
    }
  }
`;

export const VideoHeader = styled.div`
  position: relative;
  z-index: 0;

  width: 100%;
  margin-bottom: 10px;

  & > h1 {
    position: relative;
    z-index: 2;

    width: max-content;
    padding-right: 10px;
    margin: 0;
    display: block;

    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 300;

    background-color: ${({ theme }) => theme.colors.black};
  }

  &:before {
    content: "";

    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    z-index: 1;

    height: 1px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const VideoFooter = styled.div`
  position: relative;
  z-index: 0;

  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;

  & > span {
    position: relative;
    z-index: 2;

    padding-left: 10px;
    width: max-content;
    display: block;

    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 300;

    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.blue};
  }

  &:before {
    content: "";

    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    z-index: 1;

    height: 1px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
