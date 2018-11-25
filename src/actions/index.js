export const CREATING_TITLE = "CREATING_TITLE";
export const SENDING_TITLE = "SENDING_TITLE";
export const RECEIVED_TITLE = "RECEIVED_TITLE";
export const DELETE_EXCERCISE = "DELETE_EXCERCISE";

export const addExcercise = (excercise) => {
  return dispatch => {
    dispatch(creatingTitle())
    dispatch(addingTitle(excercise));
  }
}

export const creatingTitle = () => ({
  type: CREATING_TITLE
});

export const addingTitle = (excercise) => ({
  type: SENDING_TITLE,
  excercise
});

export const receivedTitle = (excercise)=> ({
  type: RECEIVED_TITLE,
  excercise
});

export const deleteEx = (id) => ({
  type: DELETE_EXCERCISE,
  id
})
