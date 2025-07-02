import { useState } from "react";
import { useParams } from "react-router-dom";
function MealInfo(){
  const {mealid} = useParams();
  const [info,setInfo]=useState('');
  const getinfo= async ()=>{
const get= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
const jsonData= await get.json();
setInfo(jsonData.meals[0]);
  }
if(mealid != ""){
getinfo()
  }

  return (
    <>
    {
      !info ? "Data not Found" : (<div className="flex items-center justify-between gap-20 bg-yellow-300 h-screen w-full p-20">
    <img src={info.strMealThumb}  className ="h-100 w-100  rounded-xl shadow-xl/30"alt="" />
    <div>
      <h1 className="text-5xl font-[900] m-7">Recipe Details</h1>
      <button className="bg-red-600 text-white font-bold px-7 py-2 rounded-full mx-5">{info.strMeal}</button>
      <h3 className="text-xl font-[800] mx-6 my-2 mt-3">Instruction's</h3>
      <p className="text-xm m-5 font-bold">{info.strInstructions}</p>
      </div>
  </div>)
    }
    
  </>
  )
}
export default MealInfo;