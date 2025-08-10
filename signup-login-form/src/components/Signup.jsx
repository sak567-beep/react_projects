import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
 const  userDetails ={
    name:"",
    email:"",
    password:""
  }
  const [data, setData] = useState(userDetails);
  const navigate = useNavigate();
  const handleInput =(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   setData({...data,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(data.name == "" || data.email == "" || data.password  == ""){
      alert('please enter details!')
    }
    else{
      const getData=JSON.parse(localStorage.getItem("user")||"[]");
    let arr=[];
    arr=[...getData];
    arr.push(data);
    localStorage.setItem("user",JSON.stringify(arr));
    alert('sign up successfully!');
    navigate('/login');
    }
    

  }
  return (
    <div className='flex justify-center items-center h-183 w-full bg-[#111] overflow-hidden absolute' >
      
      <form onSubmit={handleSubmit} className='w-100 bg-[#222] flex flex-col justify-center items-center p-5 text-white font-semibold border border-emerald-400 rounded-xl'>
        <h1 className='text-emerald-400 text-3xl font-bold py-2'>Sign up</h1>
          <input type="text" name="name"placeholder='enter your name' className='px-9 py-3 outline-none border border-emerald-500 m-3 rounded-full text-gray-300' onChange={handleInput} />
          <input type="email" name="email" placeholder='enter your email'  className='px-9 py-3 outline-none border border-emerald-500 m-3 rounded-full text-gray-300' onChange={handleInput}/>
          <input type="password"  name="password" placeholder='enter your password' className='px-9 py-3 outline-none border border-emerald-500 m-3 rounded-full text-gray-300 ' onChange={handleInput}/>
           <button className='bg-emerald-500 px-10 py-2  mt-3 rounded-full '>Sign up</button>
         <p className='py-1 mt-2 text-gray-400'>Already have an account ? <a href='/login' className='px-1 text-emerald-500'> Login</a></p>
      </form>
    </div>
  )
}

export default Signup
