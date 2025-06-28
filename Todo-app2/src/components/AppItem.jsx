import styles from "./AppItem.module.css";
function AppItem({todoname,tododate}){ 
  return <div className="container ">
    <div className={`${styles['kg-row']} row`}>
          <div className="col-6">
     {todoname}
            </div>
            <div className="col-4"> {tododate}</div>
            <div className="col-2"> <button type="button" className={`${styles['kg-button']} btn  btn-danger`}>Delete</button></div>
            </div>
  </div>
}
export default AppItem;