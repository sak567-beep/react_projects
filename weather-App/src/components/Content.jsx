import snow  from "../assets/snow.png"
import cloud  from "../assets/cloud.png"
import rain  from "../assets/rain.png"
import clear  from "../assets/clear.png"
function Content({data}){
  return <div className="flex items-center flex-col ">
    
   { data.weather[0].main=="Clouds" ?  <img src={cloud} alt="" className="h-40 w-40" />:""}
    {data.weather[0].main=="Rain" ?  <img src={rain} alt="" className="h-40 w-40" />:""}
    {data.weather[0].main=="Clear" ?  <img src={clear} alt="" className="h-40 w-40" />:""}
   { data.weather[0].main=="Mist" ? <img src={snow} alt="" className="h-40 w-40" />:""}
   {data.weather[0].main=="Haze" ?  <img src={cloud} alt="" className="h-40 w-40" />:""}

    
      <span className="text-5xl font-bold mt-6 text-[#fff]">{Math.trunc(data.main.temp)}℃</span>
      <h4 className="text-white mt-2 text-xl font-bold">{data.name}</h4>
      <p className="text-2xl py-1 font-semibold text-[#fff] ">{data.weather[0].description}</p>
     
    </div>

}



export default Content;