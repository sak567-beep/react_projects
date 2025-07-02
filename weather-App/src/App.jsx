import Searchbar from "./components/Searchbar";
import Content from "./components/Content";
import Details from "./components/Details";
import { useState } from "react";
function App(){
  const [search,setSearch] = useState('');
  const [data,setData]=useState('');
  const[error,setError]=useState('');
   const apiKey='a541fd99223a792b3aefe349ce62af2b'
   const handleInput=(e)=>{
 console.log(e.target.value)
 setSearch(e.target.value);
  }
  const getData= async()=>{
   const get = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`)
const jsonData= await get.json();
console.log(jsonData);
setData(jsonData);
if(search==""){
  alert('please enter something')
}
setSearch("");

  }
  
  return <div className="flex items-center justify-center h-screen w-full left-[50%] top-[50%]">
      <div className="bg-blue-300 w-110 text-center rounded-xl ">
    <Searchbar handleInput={handleInput} getData={getData} search={search}/>
    {data && data.weather ? <Content data={data}/>:""}
        {data && data.weather ? <Details data={data}/>:null}
    </div>
  </div>
} 
export default App;