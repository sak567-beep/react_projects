
import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import AppItem1 from "./components/AppItem1";
import AppItem2 from "./components/AppItem2";
import "./App.css";
function App(){
  return (
    <center class="todo-container">
      <div>
      <AppName></AppName>
      <AppToDo></AppToDo>
      <div className="items">
        <AppItem1></AppItem1>
          <AppItem2></AppItem2>
      </div>
       
          </div>
    </center>
    );
}
export default App;
