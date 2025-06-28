import styles from "./ButtonContainer.module.css";
const ButtonContainer=({onButtonClick})=>{
  const buttonNames=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
  return ( <div className={styles.ButtonContainer}>
   {buttonNames.map((buttonName)=>(<button key={buttonName} className={styles.buttonStyle} onClick={()=>onButtonClick(buttonName)}> {buttonName} </button>))}
  </div>
  );
};
export default ButtonContainer;