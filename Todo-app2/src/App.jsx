
import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
function App(){
  const todoItems=[{
    name:"buy milk",
    date:"04/05/2025"
  },
{
  name:"go to college",
    date:"08/05/2025"
},
{
name:"code",
date:"09/06/2025"
}];
  return (
    <center className="todo-container">
      <div>
      <AppName></AppName>
      <AppToDo></AppToDo>
      <ToDoItems todoItems={todoItems}></ToDoItems>
     
       
          </div>
    </center>
    );
}
export default App;
