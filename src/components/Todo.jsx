
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, fetchTask } from "../store";
import { useState } from "react";
const Todo = () => {
    const[task, setTask]= useState("");
  const tasks = useSelector((state) => state.task);


  const dispatch = useDispatch();
  console.log(tasks);
  

  //handle delt 
  const handleTaskDelete=(id)=>{
    dispatch(deleteTask(id));
   

  };
  const handleFetchTasks=()=>{
dispatch(fetchTask())
  } 

  const handleFormSubmit= (e)=>{
    e.preventDefault();
    if(task.trim())
      dispatch(addTask(task));
       setTask("");
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
        <button onClick={handleFetchTasks}>Fetch Tasks
             
        </button>
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
