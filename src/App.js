import React, { Component } from 'react';
import './App.css';
import {
  Paper,
  Typography,
  TextField,
  Button
} from '@material-ui/core'

class App extends Component {
  state = {
    excercises: [],
    title: ''
  }
    handleChange = ({ target: {name, value}}) => {
      this.setState({
        [name]: value
      })
    }
  render(){
    return (
      <Paper>
      <Typography variant="display2" align='center' gutterBottom>
        Exercises
      </Typography>
      <form>
        <TextField name="title" label="Exercise" value={this.state.title} onChange={this.handleChange} margin='normal'/>
      </form>
    </Paper>
    )
  }
}

export default App;
