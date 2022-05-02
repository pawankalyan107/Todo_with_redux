import React from "react";
// import {store1} from "./store";

const Profiles = (props) => {
  // console.log(props.test)
  return (
    <div>
      {props.test.map((ele, index) => {
        if (ele.id === props.test1.Id) {
          return (
            <div key={index}>
              <div>{ele.login}</div>
              <div>{ele.id}</div>
              <img alt ="" src={ele.avatar_url} />
              <div>{JSON.stringify(ele)}</div>
            </div>
          );
        }
        return "";
      })}
    </div>
  );
};

export default Profiles;
