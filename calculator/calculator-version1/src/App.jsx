
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";
function App(){
let [calVal,setCalVal]= useState("");
const onButtonClick=(buttonText)=>{
if(buttonText==='C'){

}else if(buttonText==='='){

} else{
  let newDisplay= calVal + buttonText;
  setCalVal(newDisplay);
}

  return <div className={styles.calculator}>
    <Display displayValue={calVal}></Display>
    <ButtonContainer onButtonClick={onButtonClick}>
    </ButtonContainer> 
    </div>
};
}
export default App;