import {
CREATING_TITLE,
SENDING_TITLE,
RECEIVED_TITLE,
DELETE_EXCERCISE
} from '../actions/index'

export default function excerciseReducer(state, action){
  switch(action.type){
    case 'CREATING_TITLE':
    return Object.assign({}, state, {
      creatingTitle: true
    })
    case 'SENDING_TITLE':
    return Object.assign({}, state, {
      excercises: [...state.excercises, {title: action.excercise, id: Date.now()}],
      title: action.excercise,
      sendingTitle: true,
      receivedTitle: true
    })
    case 'DELETE_EXCERCISE':
    return {
      ...state, excercises: state.excercises.filter(item => item.id !== action.id),
      deleteEx: true
    }

    default:
    return state;
  }
}
