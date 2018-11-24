import React, { Component } from 'react';
import './App.css';
import {
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton

} from '@material-ui/core';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { withStyles } from '@material-ui/core/styles';


const style = (theme) => ({
  root: {
    margin: 'auto',
    padding: '20px',
    maxWidth: '400px',
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
  }
});

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

  handleDelete = (excerciseId) => {
    const filteredExcercises = this.state.excercises.filter(item => item.id !== excerciseId)
    this.setState({excercises: filteredExcercises})
  }
  render(){
    const { title, excercises } = this.state
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
      <Typography variant="display2" align='center' gutterBottom>
        Exercises
      </Typography>
      <form onSubmit={this.handleCreate} className={classes.form}>
        <TextField name="title" label="Excercise" value={title} onChange={this.handleChange} margin='normal'/>
        <Button type='submit' color='primary' variant='fab' size='medium'> Create </Button>
      </form>
      <List>
        {excercises.map((excercise, id) => <ListItem key={id}> <ListItemText primary={excercise.title}/>
        <ListItemSecondaryAction><IconButton color='primary' onClick={()=> this.handleDelete(excercise.id)}> <DeleteForever color='secondary'/> </IconButton> </ListItemSecondaryAction>
       </ListItem>)}
      </List>
    </Paper>
    )
  }
}

export default withStyles(style)(App);
