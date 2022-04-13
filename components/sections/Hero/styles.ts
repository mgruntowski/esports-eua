import { Section } from "components/skeleton";
import { SectionTitle } from "components/typography";
import styled from "styled-components";

export const CustomSection = styled(Section)`
  padding: 20rem 0;

  background-image: url("images/backgrounds/hero.jpeg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const CustomTitle = styled(SectionTitle)`
  text-shadow: 2px 2px 5px ${({ theme }) => theme.colors.black};
`;
