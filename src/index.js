import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey'
import { MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey
  }
})

ReactDOM.render(<MuiThemeProvider theme={theme}> <App/> </MuiThemeProvider>, document.getElementById("root"))
