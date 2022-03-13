import styled from "styled-components";

export const SectionTitle = styled.h1``;

export const SectionSubtitle = styled.p`
  font-family: "Oswald", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2.4rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export const SectionText = styled.p`
  & + & {
    margin-top: 1rem;
  }
`;

export const HighlightText = styled.b`
  color: ${({ theme }) => theme.colors.blue};

  font-weight: 700;
`;

export const SectionTitle2 = styled.h2``;
