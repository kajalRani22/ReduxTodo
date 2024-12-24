import { createStore } from "redux";

const ADD_TASK = "TASK/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
  isLoading: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case DELETE_TASK:
      // eslint-disable-next-line no-case-declarations
      const updatedTask = state.task.filter((curTask, index) => {
        return index !==action.payload;
      });
      return {
        ...state,
        task: updatedTask,
      };
    default:
      return state;
  }
};

//step2: Create the Redux store usinsg sthe reducer..
export const store = createStore(taskReducer);
console.log(store);

console.log("initial State:", store.getState());

//step5: Create action creators
export const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};
 export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

//Step4: Dispatch an action to add a task
store.dispatch(addTask("buy bottle"));
store.dispatch(addTask("buy phn"));
store.dispatch(addTask("buy earphone"));
console.log("updated State:", store.getState())
//store dispatch ({type: ADD_TASK, payload: "Buy Mango"})
store.dispatch(addTask("Buy Mango"));
console.log("updated State:", store.getState());
//store.dispatch({type: DELETE_TASK, payload: 1})
store.dispatch(deleteTask(1));
console.log("deleted State:", store.getState());
//Step5: Create action creators
export default initialState;
