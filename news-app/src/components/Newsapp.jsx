import { useEffect, useState } from "react";
import Card from "./Card";
function Newsapp(){
  const apiKey='9ab1b6b3f5394a72a9f886a06b4e9029'
  const [search,setSearch]=useState('india');
  const [data,setData]=useState('');
const handleInput=(e)=>{
setSearch(e.target.value);
}
  const getData= async()=>{
    const get= await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`)
    const jsonData = await get.json();
    setData(jsonData.articles);
   
    
  }
  useEffect(()=>{
    getData();
  },[]);
  const userInput=(e)=>{
setSearch(e.target.value);
  }

  return <div>
    <nav className="flex items-center justify-around bg-blue-200 h-20 px-20">
<div>
  <h1 className="font-bold text-2xl">Trendy News</h1>
</div>
<ul>
  <a className="font-semibold text-xl mx-3">All News</a>
  <a className="font-semibold text-xl mx-3"> Trending</a>
</ul>
<div className="flex gap-5">
  <input type="text" className="w-80  text-xm px-5 py-2 rounded-xl outline-none shadow-2xl/30 bg-gray-200 placeholder: font-semibold text-[17px] " placeholder="Search News" onChange={handleInput} value={search}/>
  <button onClick={getData} className="bg-blue-600 py-1 px-6 text-white font-bold rounded">Search</button>
</div>
    </nav>
    <p className="text-center font-bold text-2xl mt-4 py-2 ">Stay Update with TrendyNews </p>
    <div className="flex gap-10 mt-5 justify-center items-center ">
      <button onClick={userInput} value="sports" className="bg-red-400 px-9 py-1 rounded-2xl text-white font-semibold">Sports</button>
      <button onClick={userInput} value="politics" className="bg-red-400 px-9 py-1 rounded-2xl text-white font-semibold">Politics</button>
      <button onClick={userInput} value="entertainment" className="bg-red-400 px-9 py-1 rounded-2xl text-white font-semibold">Entertainment</button>
      <button onClick={userInput} value="health" className="bg-red-400 px-9 py-1 rounded-2xl text-white font-semibold">Health</button>
      <button onClick={userInput} value="fitness" className="bg-red-400 px-9 py-1 rounded-2xl text-white font-semibold">Fitness</button>

    </div>
   {data?<Card data={data}></Card>:null}
      
  </div>
}
export default Newsapp;