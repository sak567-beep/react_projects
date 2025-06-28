import styles from "./AppItem.module.css";
import { AiOutlineDelete } from "react-icons/ai";
function AppItem({todoname,tododate,onDeleteClick}){ 
  return <div className="container ">
    <div className={`${styles['kg-row']} row`}>
          <div className="col-6">
     {todoname}
            </div>
            <div className="col-4"> {tododate}</div>
            <div className="col-2"> <button type="button" onClick={()=>onDeleteClick(todoname)} className={`${styles['kg-button']} btn  btn-danger`}><AiOutlineDelete /></button>
            </div>
            </div>
  </div>
}
export default AppItem;