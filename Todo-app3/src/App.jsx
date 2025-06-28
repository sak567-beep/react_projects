
import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItems } from "./store/todo-items-store";
import { useState , useReducer } from "react";

const todoItemsReducer=(state,action)=>{
  let newToDoItems = state;
  if(action.type==="NEW_ITEM"){
 newToDoItems=[...state,{name:action.payload.itemName,
date:action.payload.itemDueDate}];
  }
  else if(action.type==="DELETE_ITEM"){

  }
  return newToDoItems;
}
function App(){
 
//const [todoItems,setToDOItems] =useState([]);
const [todoItems,dispatch]= useReducer(todoItemsReducer,[]);
const onNewItem=(itemName,itemDueDate)=>{
  const newItemAction=()=>{
    type:"NEW_ITEM",
    payload = {
itemName,
itemDueDate,
    }
  };
  dispatch (newItemAction);
  /*setToDOItems((currValue)=>{
const newToDoItems=[...currValue,{name:itemName,
date:itemDueDate}];
return newToDoItems;*/
  };
  


const handleDelete=(todoItemName)=>{
const newToDoItems= todoItems.filter(item=>item.name!==todoItemName);
setToDOItems(newToDoItems);
}
  return (
    <TodoItems.Provider value={todoItems}>

    <center className="todo-container">
      <div>
      <AppName></AppName>
      <AppToDo onNewItem={onNewItem}></AppToDo>
      {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
      
      <ToDoItems todoItems={todoItems} onDeleteClick={handleDelete}></ToDoItems>
     
       
          </div>
    </center>
    </TodoItems.Provider>
    );
  }
export default App;
