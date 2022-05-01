export const Add = (event) => async (dispatch) => {
  dispatch({
    type: "ADD",
    e: event,
  });
};

export const Delete = (id) => async (dispatch) => {
  dispatch({
    type: "DELETE",
    id: id,
  });
};

export const Edit = (data, index) => async (dispatch) => {
  dispatch({
    type: "EDIT",
    value: data,
    indx: index,
  });
};

export const fetchdata = () => async (dispatch) => {
  const response = await fetch("https://api.github.com/users?since=135");
  const data = await response.json();
  let count = data.map((ele) => {
    return ele.login;
  });
  return dispatch({
    type: "FETCH_DATA",
    payload: count,
  });
};

export const fetchProfile = () => async (dispatch) => {
    const res = await fetch("https://api.github.com/users?since=135");
    const data = await res.json();
    let profiles = data.map((ele)=>{
        return ele;
    });
    return dispatch({
        type: "FETCH_PROFILES",
        profiles: profiles,
    });
};

export const foundId = (id) => async(dispatch) =>{
    return dispatch({
        type: "FOUND_ID",
        fetchId : id,
    })
}