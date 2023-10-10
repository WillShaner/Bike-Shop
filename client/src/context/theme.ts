import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#223030',
      light: '#cdcdcd',
      dark: '#000000',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    secondary: {
      main: 'hsl(13, 76%, 50%)',
      light: 'hsl(13, 76%, 65%)',
      dark: 'hsl(13, 76%, 35%)',
    },
    success: {
      main: '#3FE746',
    },
    error: {
      main: '#ff0000',
      light: '#cc0000',
      dark: '#ff7f7f',
    },
    divider: '#DDDDDD',
  },
  typography: {
    fontFamily: ['Oswald', 'sans-serif'].join(','),
  },
});
