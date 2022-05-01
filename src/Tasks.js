import React from "react";
import { Link } from "react-router-dom";
import { foundId } from "./actions";
import store  from "./store";

export default function Tasks(props) {
  // console.log(props.text)
  const [checkIn, setCheckIn] = React.useState({
    checked: false,
  });
  let show = "edit"
  function Edit(e) {
    if (e.target.innerText === "edit") {
      // console.log(e.target.previousElementSibling.contentEditable);
      e.target.previousElementSibling.contentEditable = true;
      e.target.innerText = "save"
    } else {
      e.target.previousElementSibling.contentEditable = false;
      e.target.innerText = "edit"
    }
  }
  // function Delete(e) {
  //   e.target.parentNode.remove();
  // }
  let checkingState = checkIn.checked;

  let settingState = (e) => {
    setCheckIn({
      ...checkIn,
      checked: checkingState ? false : true,
    });
    Check(e);
  };
  function Check(e) {
    if (checkingState) {
      e.target.nextElementSibling.style.textDecoration = "none";
    } else {
      e.target.nextElementSibling.style.textDecoration = "line-through";
    }
  }

  function findId(e){
    let id 
    props.id.map((ele)=>{
      if(ele.login === e.target.innerText){
        id = ele.id
        return ele.id
      }
      return id
    })
    return store.dispatch(foundId(id))
    
  }

  return (
    <>
      {props.text.map((ele, index) => {
        return (
          <div key={index}>
            <input type="checkbox" onClick={(e) => settingState(e)} ></input>
            <Link to={'/profiles'}>
            <p style={{ border: "1px solid black" }} onClick={(e)=>{ findId(e)}}>{ele}</p>
            </Link>
            <button
              onClick={(e) => {
                Edit(e);
                props.edit(
                  e.target.previousElementSibling.innerText,
                  index
                );
              }}
            >
              {show}
            </button>
            <button
              onClick={() => {
                props.del(index);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
}
