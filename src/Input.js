import React from "react";
import store from "./store";
export default function Input(props) {
  return (
    <>
      <input
        id="new-task-input"
        placeholder="Write the task ToDo"
        type={"text"}
      ></input>
      <button onClick={(e) => store.dispatch(props.Add(e))}>Add</button>
      <br></br>
    </>
  );
}
