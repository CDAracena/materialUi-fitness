import React, { Component } from 'react';
import './App.css';
import {
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText
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
      this.setState({
        excercises: [...this.state.excercises, {title: this.state.title, id: Date.now()}],
        title: ''
      })
    }
  }
  render(){
    const { title, excercises } = this.state
    return (
      <Paper>
      <Typography variant="display2" align='center' gutterBottom>
        Exercises
      </Typography>
      <form onSubmit={this.handleCreate}>
        <TextField name="title" label="Exercise" value={title} onChange={this.handleChange} margin='normal'/>
        <Button type='submit' color='primary' variant='fab' size='medium'> Create </Button>
      </form>
      <List>
        {excercises.map((excercise, id) => <ListItem key={id}> <ListItemText primary={excercise.title}/> </ListItem>)}
      </List>
    </Paper>
    )
  }
}

export default App;
