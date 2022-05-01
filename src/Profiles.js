import React from "react";
// import {store1} from "./store";

const Profiles = (props) => {
  // console.log(props.test)
  return (
    <div>
      {props.test.map((ele, index) => {
        if (ele.id === props.test1.Id) {
          return <div key={index}>{JSON.stringify(ele)}</div>;
        }
        return "";
      })}
    </div>
  );
};

export default Profiles;
