import styled from "styled-components";

export const SectionTitle = styled.h1``;

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
