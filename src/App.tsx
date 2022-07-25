import React from "react";
import { useModeContext } from "./contexts/ModeContext";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./Routes";
import { Toaster } from "react-hot-toast";
import "./styles/_main.scss";

function App() {
  const { darkMode } = useModeContext();

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#7cb474",
        dark: "#2f9e44",
      },
      secondary: {
        main: "#f0c040",
      },
    },
    typography: {
      fontFamily: "Quicksand",
      fontSize: 16,
      fontWeightBold: 700,
      fontWeightMedium: 500,
      fontWeightRegular: 300,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${darkMode ? "dark" : "light"}`}>
        <Toaster />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
