import { useState } from "react";
import Card from "./Card";

function Mainpage(){
  const [search,setSearch]=useState('');
  const [data,setdata]=useState('');
  const[msg,setMsg] = useState('');
  const handleInput=(e)=>{
setSearch(e.target.value);
  }
    const fetchData = async () => {
      if(search==""){
setMsg("Please enter something")
      } else{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
const jsonData = await get.json();
setdata(jsonData.meals);
setMsg("");
      }

    }
  
  return <>
  <h1 className="text-center p-10 text-5xl font-bold">Food Recipe App</h1>
  <div className="flex items-center justify-center">
    <input type="text"  className=" m-8 px-5 py-3 w-130 rounded-xl text-xl outline-none border-none bg-gray-100 shadow-xl/10 border-gray-500 text-gray-900 placeholder:text-gray-400 " placeholder="enter your Dish" onChange={handleInput}/>
    <button  onClick ={fetchData} className=" bg-yellow-400 px-7 py-3 rounded-full text-white font-bold shadow-lg m-2">Search</button>

</div>
<h4 className="text-center text-xl text-gray-600 mt-5">{msg}</h4>
<Card data={data}></Card>
</>
}
export default Mainpage;