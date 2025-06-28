import styles from "./AppToDo.module.css"
function AppToDo(){
  return <div>
   <div className="container items">
        <div className="row">
          <div className="col-6">
            <input type="text" className={`${styles['input-design']}`} placeholder="Enter Your Todo here" />
            </div>
            <div className="col-4"><input type="date" className={`${styles['input-design']}`}></input>
            </div>
            <div className="col-2">
              <button type="button" className={`${styles['kg-button']} btn  btn-success`}>Add</button></div>
          </div>
          </div>
          </div>
}
export default AppToDo;