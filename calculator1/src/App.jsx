import Input from "./components/Input";
import Brand from "./components/Brand";
import Keyboard from "./components/Keyboard";
import { useState } from "react";
function App(){
  const [result,setResult]=useState("");
  const handleClick=(e)=>{
    setResult(result.concat(e.target.value));
  }
  const clearScreen=()=>{
    setResult("");

  }
  const calculate=()=>{
    setResult(eval(result).toString());
  }
  return <div className=" bg-gray-800 flex  justify-center items-center text-white h-screen w-screen">
<div className="bg-gray-900 w-64  h-auto rounded-2xl border-4 border-gray-100">
 <Input result={result}></Input>
 <Brand></Brand>
 <Keyboard clearScreen={clearScreen} handleClick={handleClick} calculate={calculate}></Keyboard>
</div>
  </div>
}
export default App;