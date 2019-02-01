import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const boxShadow = '5px 5px 5px 0px rgba(0,0,0,0.5)'

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00ffd5'
    },
    secondary: {
      main: '#98969a'
    },
    text: {
      primary: '#FFF',
      secondary: '#00ffd5'
    },
    background: {
      default: '#535255'
    }
  },
  typography: {
    fontSize: 16
  },
  overrides: {
    MuiPaper: {
      elevation2: {
        '-webkit-box-shadow': boxShadow,
        '-moz-box-shadow': boxShadow,
        boxShadow
      }
    }
  }
})
