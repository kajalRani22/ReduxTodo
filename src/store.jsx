import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};
//Redux Toolkit slice
const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
state.task.push(action.payload);
//state.task=[...state.task, action.payload],
    },
    deleteTask(state, action) {
      state.task = state.task.filter(
        (curTask, index) => index !== action.payload
      );
    },
    clearTask() {
      return [];  // Completely resets state to an empty array
    }
  },
});
console.log(taskReducer);
export const { addTask, deleteTask, clearTask } = taskReducer.actions;

//(New style)
export const store = configureStore({
  reducer: {
    taskReducer: taskReducer.reducer,
  },
})
console.log(store.getState());



console.log(store.dispatch(addTask("Buy Phone")));
console.log(store.dispatch(deleteTask(1)));
console.log(store.getState());
console.log(store.dispatch(addTask("Buy copy")));
console.log(store.dispatch(addTask("Buy Car")));
console.log(store.getState());
export default initialState;
