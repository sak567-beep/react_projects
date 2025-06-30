import { useRef } from "react";
import Card from "./Card";

function Foreground(){ 
  const ref=useRef(null);
  const data=[{
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize:".9mb",
    close:"true",
    tag:{
      isOpen:true,
      tagColor:"green",
      tagTitle:"Download Now"

    },
  },
   { desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize:".9mb",
    close:"true",
    tag:{
      isOpen:true,
      tagColor:"green",
      tagTitle:"Download Now"

    },
  },
     { desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize:".9mb",
    close:"true",
    tag:{
      isOpen:true,
      tagColor:"blue",
      tagTitle:"Download Now"

    },
  },
  
  ];
  return <>
<div ref={ref}className="fixed  top-0 left-0 z-[3]  h-full w-full flex gap-10 flex-wrap p-5">
  {data.map((item,index)=>(
    <Card data={item} reference={ref}></Card>
  ))}

</div>
  </>
}
export default Foreground;