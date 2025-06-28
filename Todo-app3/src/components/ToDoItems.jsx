import { useContext } from "react";
import { TodoItems } from "../store/todo-items-store";
import AppItem from "./AppItem";
import styles from "./ToDoItems.module.css"
const ToDoItems=({todoItems,onDeleteClick}) =>{
   const todoItemsFromContext = useContext( TodoItems)
   console.log(`items from context  ${todoItemsFromContext}`)
 
  return  <div className={`${styles['items']}`}>
    {
         todoItems.map((item)=><AppItem key={item.name} todoname={item.name} tododate={item.date} onDeleteClick={onDeleteClick}></AppItem>)
    }
      </div>
}
export default ToDoItems;