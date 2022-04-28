export const Add = (event) => async (dispatch) => {
  dispatch({
    type: "ADD",
    e: event,
  });
};
