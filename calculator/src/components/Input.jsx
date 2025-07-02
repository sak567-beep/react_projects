function Input({result}){
  return <div className="screen p-2">
     <input type="text" className=" px-1 text-right outline-none rounded-lg bg-gray-100 text-2xl w-full text-black placeholder-black h-15" placeholder="0" value={result}/>
  </div>

}
export default Input;