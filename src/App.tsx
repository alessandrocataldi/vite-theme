import { useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import { darkTheme } from "./darkMode";
import { lightTheme } from "./lightMode";
import { GlobalStyles } from "./theme";

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div>
        <GlobalStyles />
        <h1>Hello theme!</h1>
        <Button onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              Light
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              Dark
            </span>
          )}
        </Button>
      </div>
    </ThemeProvider>
  );
};

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: 0;
  background-color: ${({ theme }) => theme.accents};
  color: ${({ theme }) => theme.white};
  border-radius: 4px;
`;

export default App;
