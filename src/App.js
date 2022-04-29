import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./Tasks";
import Input from "./Input";
import { connect } from "react-redux";
import { Add } from "./actions";
import { Delete, Edit } from "./actions";

const mapStateToProps = (state) => ({
  local_variable: state,
});

const App = ({ local_variable, Add, Delete, Edit }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <h1>TODO</h1>
      <Routes>
        <Route path="/" exact element={<Input Add={Add} />} />
        <Route path="/tasks" element={<Tasks text={local_variable} del={Delete} edit={Edit}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default connect(mapStateToProps, { Add, Delete, Edit })(App);
