import React from "react";

export default function Tasks(props) {
  // console.log(props.text)
  const [checkIn, setCheckIn] = React.useState({
    data: [],
    checked: false,
  });
  function handleChange(e){
    setCheckIn({
      ...checkIn,
      data: e.target.value
    })
  }
  function Edit(e) {
    // console.log(e.target.previousElementSibling.value)
    if (e.target.previousElementSibling.contentEditable) {
      // console.log(e.target.previousElementSibling.contentEditable);
      e.target.previousElementSibling.contentEditable = true;
    } else {
      e.target.previousElementSibling.contentEditable = false;
    }
  }
  // function Delete(e) {
  //   // e.target.parentNode.remove();
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
  return (
    <>
      {props.text.map((ele, index) => {
        return (
          <div key={index}>
            <input type="checkbox" onClick={(e) => settingState(e)} onChange={handleChange}></input>
            <p style={{ border: "1px solid black" }}>{ele}</p>
            <button
              onClick={(e) => {
                Edit(e);
                props.edit(
                  checkIn.data,
                  index
                );
              }}
            >
              edit
            </button>
            <button
              onClick={(e) => {
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
