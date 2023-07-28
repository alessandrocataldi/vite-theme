import { useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import { darkTheme } from "./DarkMode";
import { LightTheme } from "./LightMode";
import { GlobalStyles } from "./Theme";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

interface ThemeWrapPros {
  children: React.ReactNode;
}

const ThemeWrapper = ({ children }: ThemeWrapPros) => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : LightTheme}>
      <GlobalStyles />
      {children}
      <ButtonChangeTheme onClick={toggleTheme}>
        {isDarkTheme ? (
          <span aria-label="Light mode" role="img">
            <IconSunFilled size={24} />
          </span>
        ) : (
          <span aria-label="Dark mode" role="img">
            <IconMoonFilled size={24} />
          </span>
        )}
      </ButtonChangeTheme>
    </ThemeProvider>
  );
};

const ButtonChangeTheme = styled.button`
  position: fixed;
  bottom: 0;
  right: 16px;
  bottom: 16px;
  border-radius: 999px;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;
export default ThemeWrapper;
