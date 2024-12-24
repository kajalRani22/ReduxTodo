
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../store";
import { useState } from "react";
const Todo = () => {
    const[task, setTask]= useState("")
  const tasks = useSelector((state) => state.task);


  const dispatch = useDispatch();
  //handle form submit
  const handleFormSubmit= (e)=>{
    e.preventDefault();
      dispatch(addTask(task));
      return setTask("")
  }

  //handle delt 
  const handleTaskDelete=(id)=>{
    
   return dispatch(deleteTask(id));
   

  }
  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square">To-do List:</i>
        </h1>
        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <input type="text" id="input-box" placeholder="Add a new task"  value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button>Add Task</button>
          </form>
        </div>
        <ul id="list-container">
          {" "}
          {/* data display ho jayega screen pr*/}
          {tasks.map((curTask, index) => {
            return (
              <li key={index}>
                <p>
                  {index}: {curTask}
                </p>
                <div>
                  <MdDeleteForever
                    className="icon-style"
                    onClick={() => handleTaskDelete(index)}
                  />
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
