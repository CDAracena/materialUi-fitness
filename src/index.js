import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { createStore } from 'redux';
import excerciseReducer from './reducers/index'
import { Provider } from 'react-redux';

const initialState = {
    excercises: [],
    title: null,
    creatingTitle: false,
    sendingTitle: false,
    receivedTitle: false,
    deleteEx: false
  }

const store = createStore(excerciseReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
   <App/>
   </Provider>
 </MuiThemeProvider> , document.getElementById("root"))
