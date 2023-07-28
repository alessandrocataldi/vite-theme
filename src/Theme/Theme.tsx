import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transform: 0.2 ease-in;
  }
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;
