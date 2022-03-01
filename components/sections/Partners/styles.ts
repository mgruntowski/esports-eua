import styled from "styled-components";

type ImageContainerProps = {
  width?: string;
};

export const ImagesGrid = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;

  width: ${({ width = "200px" }) => width};
  height: 100px;
  display: block;
`;
