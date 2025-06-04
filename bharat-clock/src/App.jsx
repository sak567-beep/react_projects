import AppName from "./components/AppName";
import AppPara from "./components/AppPara";
import AppTime from "./components/AppTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App(){
  return (
    <center>
      <AppName></AppName>
      <AppPara></AppPara>
      <AppTime></AppTime>
    </center>
  );
}
export default App;