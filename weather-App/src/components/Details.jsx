import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

function Details({data}){
  return <div className="w-full  flex items-center my-3 justify-center ">
    <div className="w-1/2 flex items-center gap-2 justify-center ">
<span className="text-6xl text-blue-900"><WiHumidity /></span>
<div className="flex flex-col p-2">
<h3 className="text-xl font-bold text-[#fff]">{data.main.humidity}%</h3>
<h4 className="text-xm font-semibold text-[#fff]">Humidity</h4>

</div>

    </div>
    <div className="w-1/2 flex items-center gap-2 justify-center ">
    <span className="text-4xl text-blue-900"><FaWind /></span>
<div className="flex flex-col p-2">
<h3 className="text-xl font-bold text-[#fff]">{data.wind.speed}Km/H</h3>
<h4 className="text-xm font-semibold text-[#fff]">Wind Speed</h4>
</div>
    </div>
  </div>
}
export default Details;