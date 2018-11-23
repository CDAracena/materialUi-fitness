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
    handleChange = (input) => {
      this.setState({title: input.target.value})
    }

    handleCreate = e => {
      e.preventDefault();

    if (this.state.title) {
      console.log(this.state.title)
      this.setState({
        excercises: [...this.state.excercises, {title: this.state.title, id: Date.now()}],
        title: ''
      })
    }
  }
  render(){
    const { title } = this.state
    return (
      <Paper>
      <Typography variant="display2" align='center' gutterBottom>
        Exercises
      </Typography>
      <form onSubmit={this.handleCreate}>
        <TextField name="title" label="Exercise" value={title} onChange={this.handleChange} margin='normal'/>
        <Button type='submit' color='primary' variant='fab' size='medium'> Create </Button>
      </form>

    </Paper>
    )
  }
}

export default App;
