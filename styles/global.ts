import { createGlobalStyle } from "styled-components";

import type ITheme from "interfaces/Theme";

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  html {
    font-size: 10px;
  }

  body {
    margin: 0;

    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  h1, h2 {
    color: ${({ theme }) => theme.colors.blue};

    font-family: "Oswald", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-transform: uppercase;
  }

  h1 {
    font-size: 4.8rem;
  }

  h2 {
    font-size: 3.2rem;
  }

  p, span {
    font-family: "Roboto Condensed", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2.0rem;
    font-weight: 300;
  }
`;

export default GlobalStyle;
