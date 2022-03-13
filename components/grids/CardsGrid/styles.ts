import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  padding: 1.6rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

export const GridBox = styled.div`
  position: relative;

  flex: 1 0 340px;
  height: 280px;
  padding: 2.4rem;
  border-radius: 6px;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.colors.darkGray};
  box-shadow: 0 5px 20px rgb(0, 0, 0, 0.3);

  svg {
    position: absolute;
    left: 50%;
    bottom: -50px;
    transform: translateX(-50%);

    filter: ${({ theme }) => `drop-shadow(0px 0px 8px ${theme.colors.black})`};

    path {
      fill: ${({ theme }) => theme.colors.blue} !important;
    }
  }
`;

export const CardTitle = styled.h3`
  width: 100%;
  margin-bottom: 3rem;

  font-size: 3rem;
  text-align: center;
`;

export const CardText = styled.p`
  opacity: 0.7;

  font-weight: 500;
  letter-spacing: 0.4px;
`;
