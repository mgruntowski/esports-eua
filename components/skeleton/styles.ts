import styled from "styled-components";

type SectionProps = {
  background?: string;
};

type SectionContentProps = {
  "data-floating-title"?: string;
  floatingTitleColor?: string;
};

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

export const Section = styled.section<SectionProps>`
  position: relative;

  padding: 5.6rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.black};
  background: ${({ background }) => background};
`;

export const SectionContent = styled.div<SectionContentProps>`
  position: relative;

  flex: 1 1 100%;
  max-width: 1100px;

  &::before {
    content: attr(data-floating-title);

    position: absolute;
    top: -5.6rem;
    right: 0;

    max-width: 800px;
    display: block;

    font-family: "Oswald", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 20rem;
    font-weight: 400;
    line-height: 20rem;
    text-transform: uppercase;
    text-align: right;
    -webkit-text-stroke: 0.5px
      ${({ theme, floatingTitleColor = theme.colors.white }) => floatingTitleColor}40;
    -webkit-text-fill-color: transparent;
  }
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
