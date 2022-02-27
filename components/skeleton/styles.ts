import styled from "styled-components";

type ColProps = {
  flex?: number;
  maxWidth?: string;
};

type RowProps = {
  alignItems?: string;
  justifyContent?: string;
  marginTop?: string;
  gap?: string;
};

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.black};
`;

export const SectionContent = styled.div`
  max-width: 1100px;
`;

export const Row = styled.div<RowProps>`
  position: relative;

  width: 100%;
  margin-top: ${({ marginTop = "0px" }) => marginTop};
  display: flex;
  align-items: ${({ alignItems = "flex-end" }) => alignItems};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  flex-wrap: wrap;
  gap: ${({ gap = "2.4rem" }) => gap};
`;

export const Col = styled.div<ColProps>`
  position: relative;

  flex: ${({ flex = 1 }) => flex};
  width: 100%;
  max-width: ${({ maxWidth = "unset" }) => maxWidth};
  display: block;
`;
