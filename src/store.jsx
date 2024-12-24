import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const  FETCH_TASKS = "task/fetch";

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


      case FETCH_TASKS:
        return{
      ...state,
      task:[...state.task, ...action.payload],

        };
    default:
      return state;
  }
};

//step2: Create the Redux store usinsg sthe reducer..
export const store = createStore(taskReducer, composeWithDevTools(applyMiddleware)(thunk));
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
export const fetchTask = ()=>{
    return async (dispatch)=>{
try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
    const task = await res.json();
    console.log(task);
    dispatch({type: FETCH_TASKS, payload: task.map((curTask)=> curTask.title) })
} catch (error) {
    console.log(error)
}
    }
}

export default initialState;
