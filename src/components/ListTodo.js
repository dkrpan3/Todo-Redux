import React, { useState } from "react";
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, editTodo } from "../features/todoSlice";
const ListTodo = () => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [state, setState] = useState({
    id: "",
    sadrzaj: "",
    contentError: null,
  });
  const onEditToggle = (id, sadrzaj) => {
    setEditing(true);
    setState({ ...state, id, sadrzaj });
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };
  const { sadrzaj, contentError, id } = state;
  const edit = () => {
    if (sadrzaj === "") {
      setState({ ...state, contentError: "Upiši nešto!" });
      return;
    }
    dispatch(editTodo({ sadrzaj, id }));
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="form">
          <h2>Update your plan for today</h2>
          <input
            type="text"
            value={sadrzaj}
            name="sadrzaj"
            onChange={handleChange}
          ></input>
          <button type="button" className="button" onClick={edit}>
            Edit
          </button>
          {contentError ? <div className="error">{contentError}</div> : null}
        </div>
      ) : (
        <ul className="todos">
          {todoList.map(({ id, sadrzaj }) => {
            return (
              <li className="grid" key={id}>
                <span className="content">{sadrzaj}</span>
                <span className="todo-action">
                  <AiOutlineCloseCircle
                    className="close"
                    onClick={() => dispatch(deleteToDo({ id }))}
                  />
                  <AiFillEdit
                    className="edit"
                    onClick={() => onEditToggle(id, sadrzaj)}
                  />
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default ListTodo;
