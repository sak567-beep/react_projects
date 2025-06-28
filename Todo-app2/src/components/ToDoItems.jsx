import AppItem from "./AppItem";
import styles from "./ToDoItems.module.css"
const ToDoItems=({todoItems}) =>{
  return  <div className={`${styles['items']}`}>
    {
         todoItems.map(item=><AppItem todoname={item.name} tododate={item.date} ></AppItem>)
    }
      </div>
}
export default ToDoItems;