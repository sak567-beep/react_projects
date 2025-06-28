import { useState , useRef } from "react";
import styles from "./AppToDo.module.css"
import { IoAddCircleOutline } from "react-icons/io5";
function AppToDo({onNewItem}){
const todoNameElement = useRef();
const duedateElement = useRef();
const handleAddButton=(event)=>{
event.preventDefault();
   const todoName=todoNameElement.current.value;
 const dueDate=duedateElement.current.value;
todoNameElement.current.value="";
duedateElement.current.value="";
onNewItem(todoName,dueDate);

}
  return <div>
   <div className="container items">
        <form className="row kg-row" onSubmit={handleAddButton}>
          <div className="col-6">
            <input type="text" ref={todoNameElement} className={`${styles['input-design']}`} placeholder="Enter Your Todo here"  />
            </div>
            <div className="col-4"><input ref={duedateElement} type="date" className={`${styles['input-design']}`} ></input>
            </div>
            <div className="col-2">
              <button  type="submit"  className={`${styles['kg-button']} btn  btn-success`}><IoAddCircleOutline />
</button></div>
</form>
          </div>
          </div>
    
}
export default AppToDo;