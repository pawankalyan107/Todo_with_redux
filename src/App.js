import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./Tasks";
import Input from "./Input";
import { connect } from "react-redux";
import { Add } from "./actions";
import { Delete, Edit } from "./actions";
import Profiles from "./Profiles";

const mapStateToProps = (state) => (
  {
  local_variable: state.firstReducer,
  local_variable1: state.secondReducer.prof,
  local_variable2: state.secondReducer
});
const App = ({ local_variable, Add, Delete, Edit, local_variable1, local_variable2 }) => {
  // console.log(local_variable2)
  return (
    <BrowserRouter>
      <Navbar />
      {/* <h1>TODO</h1> */}
      <Routes>
        <Route path="/" exact element={<Input Add={Add} />} />
        <Route path="/tasks" element={<Tasks text={local_variable} del={Delete} edit={Edit} id={local_variable1}/>} />
        <Route path="/profiles" element={<Profiles test={local_variable1} test1={local_variable2} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default connect(mapStateToProps, { Add, Delete, Edit })(App);
