import Display from "./components/Display";
import Button from "./components/Button";
import styles from "./App.module.css";
function App(){
  return <div className={styles.calculator}>
    <Display></Display>
    <Button></Button>
</div>
}
export default App;