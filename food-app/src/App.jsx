import Mainpage from "./components/Mainpage";
import { Route, Routes } from "react-router-dom";
import MealInfo from "./components/MealInfo";
function App(){
  
  return <div>
    
    <Routes>
      <Route path='/' element={<Mainpage></Mainpage>}></Route>
      <Route path='/:mealid' element={<MealInfo></MealInfo>}></Route>
    </Routes>
    
  
  </div>


}
export default App;