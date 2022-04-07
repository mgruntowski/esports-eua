import { Section } from "components/skeleton";
import styled from "styled-components";

export const ProgramTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};

  text-align: center;
  text-shadow: 2px 2px 3px black;
`;

export const CustomSection = styled(Section)`
  padding: 5.6rem 0 9.6rem 0;

  background-image: url("images/backgrounds/gaming-office.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
