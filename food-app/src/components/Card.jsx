import { NavLink } from "react-router-dom";
function Card({data}){

  
  return <div className="flex flex-wrap flex-shrink-0 items-center gap-20  p-20 left-[50%] right-[50%] justify-center" >
  {!data ?  "" : data.map((curItem,index)=>{
return(
  <div className=" flex flex-col items-center justify-center shadow-xl/20 rounded-xl overflow-hidden p-3">
    <img src={curItem.strMealThumb}  className='h-80 w-80 rounded  shadow-xl/30 'alt="" />
    <p className="font-bold text-xl mt-5">{curItem.strMeal}</p>
    <NavLink to={`/${curItem.idMeal}`}>
       <button className="bg-yellow-400 px-8 py-2 rounded-full m-3 text-white font-bold">Recipe</button>
    </NavLink>
   
  </div>
)
})
}

</div>

  
}
export default Card;