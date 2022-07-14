import React from "react";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';
import Routes from './Routes'
import { Toaster } from "react-hot-toast";
import './styles/_base.scss'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6363',
      dark: '#b24545',
    },
    secondary: {
      main: '#f0c040',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
    background: {
      default: '#f7f7f7',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 300,
    htmlFontSize: 8,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Toaster />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
