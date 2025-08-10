function Card({data}){
  
 return <div className="flex flex-shrink-0 gap-20 flex-wrap mt-10 px-10 justify-center items-center ">
 {
  data.map((curItem,index)=>{
    if(!curItem.urlToImage){
      return null
    }
    else{
       return (
      <div  className=" w-90 shadow-2xl/30  rounded-2xl min-h-110  overflow-hidden ">
        <img src={curItem.urlToImage} className="w-full mb rounded h-60" />
        <div>
         < h4 onClick={()=>{window.open(curItem.url)}} className="text-xl my-2  px-5 font-semibold">{curItem.title}</h4>
          <p className="font-semibold my-2 px-5 ">{curItem.description}</p>
          <button className="bg-blue-500 text-white font-semibold rounded px-5 py-1 mb-4 ml-5 my-2 hover:bg-blue-400" onClick={()=>{window.open(curItem.url)} }>Read More</button>
        </div>
      </div>
    )
    }
   
  })
 }
</div>
}
export default Card;