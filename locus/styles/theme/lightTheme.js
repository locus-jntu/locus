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
    bg: {
      main: '#F2E9E4'
    }
  },
  typography: {
    fontFamily: [
      'montserrat'
    ]
  }
})

export default lightTheme
