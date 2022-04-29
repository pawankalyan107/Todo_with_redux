export const Add = (event) => async (dispatch) => {
  dispatch({
    type: "ADD",
    e: event,
  });
};

export const Delete =(id)=> async(dispatch) =>{
    dispatch({
        type: "DELETE",
        id: id
    })
}

export const Edit =(data, index)=> async(dispatch) =>{
    dispatch({
        type: "EDIT",
        value: data,
        indx: index
    })
}