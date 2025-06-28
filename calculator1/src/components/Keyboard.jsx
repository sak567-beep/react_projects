function Keyboard({clearScreen,handleClick}){
  return (
    <>
  <div className="m-2 flex justify-between ">
    <input type="button" onClick={clearScreen} value="C" className="bg-red-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none " onClickCapture={handleClick()}/>
        <input type="button" value="<" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none" onClickCapture={handleClick()}/>
    <input type="button" value="%" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none "  onClickCapture={handleClick()} />
    <input type="button" value="/" className="bg-pink-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none "  onClickCapture={handleClick()} />

  </div>
  <div className="m-2 flex justify-between ">
    <input type="button" value="7" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none " onClickCapture={handleClick()}/>
        <input type="button" value="8" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none " onClickCapture={handleClick()}/>
    <input type="button" value="9" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none " onClickCapture={handleClick()}/>
    <input type="button" value="*" className="bg-green-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none " onClickCapture={handleClick()}/>

  </div>
  <div className="m-2 flex justify-between ">
    <input type="button" value="4" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-noneonClickCapture={} "onClickCapture={handleClick()}/>
        <input type="button" value="5" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none "onClickCapture={handleClick()}/>
    <input type="button" value="6" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none "onClickCapture={handleClick()}/>
    <input type="button" value="-" className="bg-indigo-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none "onClickCapture={handleClick()}/>

  </div>
  <div className="m-2 flex justify-between ">
    <input type="button" value="1" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none " onClickCapture={handleClick()}/>
        <input type="button" value="2" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none " onClickCapture={handleClick()}/>
    <input type="button" value="3" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none " onClickCapture={handleClick()}/>
    <input type="button" value="+" className="bg-purple-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none " onClickCapture={handleClick()}/>

  </div>
   <div className="m-2 flex justify-between ">
    <input type="button" value="0" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none "onClickCapture={handleClick()}/>
        <input type="button" value="00" className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none "onClickCapture={handleClick()}/>
    <input type="button" value="." className="bg-gray-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none "onClickCapture={handleClick()}/>
    <input type="button" value="=" className="bg-orange-300 rounded-lg w-12 h-12 text-center text-black font-medium flex justify center items-center outline-none "onClickCapture={handleClick()}/>

  </div>
  </>)
  }
  export default Keyboard;