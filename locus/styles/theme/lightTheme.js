import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#264653'
    },
    secondary: {
      main: '#00C6A9'
    },
    info: {
      main: '#c8a2c8'
    }
  },
  typography: {
    fontFamily: [
      'montserrat'
    ]
  }
})

export default lightTheme
