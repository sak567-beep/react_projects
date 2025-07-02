import { FaSearch } from "react-icons/fa";
function Searchbar({handleInput,getData,search}){
  return <>

      <h1 className="text-4xl font-bold p-4 text-[#fff] mt-2">Weather App</h1>
      <div className=" flex  items-center justify-center gap-8 mb-4">
        <input type="text" placeholder="enter city name" className="w-70 px-4 py-3 rounded-full my-5 bg-white shadow-2xl/20 outline-none placeholder:text-gray-700" onChange={handleInput} value={search}/> 
        <button onClick={getData} className="bg-white h-12 w-12 text-center flex items-center justify-center  rounded-full text-gray-500 shadow-2xl"><FaSearch/></button>
      </div>
  
  </>
}
export default Searchbar;