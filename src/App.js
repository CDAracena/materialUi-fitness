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
import { connect } from 'react-redux';
import { addingTitle, deleteEx } from './actions/index';



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
    title: ''
  }

  setTitle = e => {
    this.setState({title: e.target.value})
  }

setChange(e){
  e.preventDefault()
  if (this.state.title) {
  this.props.newExcercise(this.state.title)
  }
}

setDelete(id){
  this.props.deleteEx(id)
}
  render(){
    const { classes, excercises } = this.props
     return (
      <Paper className={classes.root}>
      <Typography variant="display2" align='center' gutterBottom color="primary">
        Exercises
      </Typography>
      <form className={classes.form}>
        <TextField name="title" label="Excercise"  margin='normal' onChange={this.setTitle}/>
        <Button type='submit' color='primary' variant='fab' size='medium' onClick={(e)=> this.setChange(e)}> Create </Button>
      </form>
      <List>
        {excercises.map((excercise, id) =>
          <ListItem key={id}> <ListItemText primary={excercise.title}/>
        <ListItemSecondaryAction><IconButton color='primary' onClick={() => this.setDelete(excercise.id)}> <DeleteForever color='secondary'/> </IconButton> </ListItemSecondaryAction>
       </ListItem>)}
      </List>
    </Paper>
    )
  }
}

const mapStateToProps = ({excercises, title}) => {
  return {
    excercises, title
  }
}

const mapDispatchToProps = dispatch => {
    return {
      newExcercise: (item) => dispatch(addingTitle(item)),
      deleteEx: (id) => dispatch(deleteEx(id))
    }
  }


export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(App));
