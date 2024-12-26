
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {useState} from "react"
import { addTask, deleteTask, clearTask } from "../store";

const Todo = () => {
    const[userTask, setUserTask]= useState("");
    
  const tasks= useSelector((state) => state.taskReducer.task);
  const dispatch = useDispatch();
  const handleFormSubmit = (e)=>{
   e.preventDefault();
   dispatch(addTask(userTask));
   setUserTask("");
  };
  const handleDelete=(index)=>{
    dispatch(deleteTask(index))
  }
  const allClear = ()=>{
    dispatch(clearTask());
    
  }
  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square">To-do List:</i>
        </h1>
        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <input type="text" id="input-box" placeholder="Add a new task"  value={userTask} onChange={(e)=>setUserTask(e.target.value)}/>
            <button type="submit">Add Task</button>
          </form>
        </div>
        <button type="reset" onClick={()=>allClear()}>All clear</button>
        
        <ul id="list-container">
        {tasks?.map((curTask, index) => {
            return(
              <li key={index}>
                <p>
                  {index}: {curTask}
                </p>
                <div>
                  <MdDeleteForever
                    className="icon-style" onClick={()=>handleDelete(index)}/>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
