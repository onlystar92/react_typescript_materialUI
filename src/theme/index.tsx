import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#333333',
      light: '#787676',
      dark: '#BB0002',
    },
    secondary: {
      main: '#BB0002',
      light: '#787676',
      dark: '#333333',
    },
    background: {
      default: '#F5F6F9',
    },
    text: {
      primary: '#333333',
      secondary: '#BB0002',
      disabled: '#EBEBEB',
      hint: '#EBEBEB',
    },
    error: {
      main: '#333333',
    },
    warning: {
      main: '#AA1917',
      light: '#5B5B5B',
    },
    success: {
      main: '#5B5B5B',
    },
    divider: '#C2C2C2',
  },
  typography: {
    h1: {
      fontFamily: 'Roboto',
      fontSize: '25px',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: '15px',
    },
    h4: {
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 100,
    },
    h5: {
      fontFamily: 'Roboto',
      fontSize: '13px',
    },
    h6: {
      fontFamily: 'Roboto',
      fontSize: '12px',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Roboto',
      fontSize: '15px',
    },
    body2: {
      fontFamily: 'Roboto',
      fontSize: '12px',
      fontWeight: 100,
      lineHeight: 1.77,
    },
    button: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '13px',
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        fontSize: '12pt',
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: '11pt',
      },
    },
  },
});

export default theme;
