import React from 'react'

const Card = ({data}) => {
  return (
   <div className='flex  flex-shrink-0 flex-wrap items-center justify-center gap-10  my-15 py-10' >
   {
    data.map((curVal,index)=>{
       return  <img src={curVal.urls.full} className='h-90 w-90 rounded-xl border border-gray-500 shadow-2xl/30 mx-10' onClick={()=>{
        window.open(curVal.links.download)
        
      }}/>
       
    }
  )}
  </div>
  )
}

export default Card
