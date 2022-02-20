import { configureStore } from "@reduxjs/toolkit";
import toDoSlider from "../features/todoSlice";
export default configureStore({
  reducer: {
    // allows you create n number of sliders
    toDo: toDoSlider,
  },
});
