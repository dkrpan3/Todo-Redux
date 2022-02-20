import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todoSlice";
//import "./input.css";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    sadrzaj: "",
    contentError: null,
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };
  const add = () => {
    if (sadrzaj === "") {
      setState({ ...state, contentError: "Upiši zadatak!" });
      return;
    }
    dispatch(addToDo({ newContent: sadrzaj }));
    setState({ ...state, sadrzaj: "" });
  };
  const { sadrzaj, contentError } = state;
  return (
    <div className="form">
      <h2 style={{ color: "black" }}>Koji ti je plan za danas?</h2>
      <input
        type="text"
        value={sadrzaj}
        name="sadrzaj"
        onChange={handleChange}
      ></input>
      <button type="button" className="button" onClick={add}>
        Add
      </button>
      {contentError ? <div className="error">{contentError}</div> : null}
    </div>
  );
};
export default AddTodo;
