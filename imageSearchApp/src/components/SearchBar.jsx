import React from 'react'
import { useState } from 'react'
import Card from './Card'
//https://api.unsplash.com/photos/users/ashbot/likes?page=1&query=${search}&client_id=${}
//NVn99f-w1Gq_FP5fVlK5rabHrQwchUjgcMtzhyjwzGY
const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([]);
  const api='NVn99f-w1Gq_FP5fVlK5rabHrQwchUjgcMtzhyjwzGY'
  const handleInput=(e)=>{
  setSearch(e.target.value);
  }
  const getData = async()=>{
  
    const get = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${api}`)
    const jsonData= await get.json();
    console.log(jsonData.results);
    
    setData(jsonData.results);

  }
 
  return (
    <>
    <div className='flex justify-center items-center mt-10 gap-10'>
      <input type="text"  className="w-100 px-5 py-2 rounded-xl outline-0 bg-gray-200 font-semibold shadow-2xl"placeholder='search images' onChange={handleInput}/>
      <button  onClick={getData} className='bg-blue-500 px-8 py-2 text-white font-bold rounded-full hover:bg-blue-400 '>Search</button>
    </div>
    
     {
       data ?  <Card data={data}></Card>:""
     }
   
     
    
    </>
  )
}

export default SearchBar
