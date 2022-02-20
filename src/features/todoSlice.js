import { createSlice } from "@reduxjs/toolkit";
export const toDoSlider = createSlice({
  name: "toDo",
  initialState: {
    todoList: [
      { id: 1, sadrzaj: "Predavanje Algebra" },
      { id: 2, sadrzaj: "Sastanak sa direkorom Lovrom" },
    ],
  },

  reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
        id: new Date(),
        sadrzaj: action.payload.newContent,
      };
      state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});
// Action creators are generated for each case reducer function
export const { addToDo, deleteToDo, editTodo } = toDoSlider.actions;
export default toDoSlider.reducer;
