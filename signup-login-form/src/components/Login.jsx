import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [msg, setmsg] = useState('')
  const navigate = useNavigate();
  const handleInput=(e)=>{
const name=e.target.name;
const value=e.target.value;
if('email'==name){
  setemail(value);
}
if('password'==name){
  setpassword(value);
}
  }
  const handleSubmit=(e)=>{
    if(email==""|| password==""){
       alert('please enter details!')
    }
    else{
      let getDetails=JSON.parse(localStorage.getItem('user'));
getDetails.map((curValue)=>{
let storeEmail=curValue.email;
let storePassword=curValue.password;
if(storeEmail==email && storePassword==password){
alert('login successfully')
navigate("/home")
}
else{
   return setmsg('invalid password or email')
}
    })

}

  }
  return (
<div className='flex justify-center items-center h-183 w-full bg-[#111] overflow-hidden absolute' >
      <p className='text-center font-bold text-emerald-500 m-2 p-5 '>{msg}</p>
      <form  onSubmit={ handleSubmit} className='w-100 bg-[#222] flex flex-col  justify-center items-center p-5 text-white font-semibold border border-emerald-400 rounded-xl'>
        <h1 className='text-emerald-400 text-3xl font-bold py-3'>Login</h1>
          <input type="email" name="email" placeholder='enter your email'  className='px-8 py-3 outline-none border border-emerald-500 m-3 rounded-full text-gray-300' onChange={handleInput}/>
          <input type="password"  name="password" placeholder='enter your password' className='px-8 py-3 outline-none border border-emerald-500 m-3 rounded-full text-gray-300 ' onChange={handleInput}/>
          <button className='bg-emerald-500 px-10 py-2  mt-3 rounded-full '>Login</button>
         <p className='py-1 mt-2 text-gray-400'>create an account  <a href='/signup' className='px-2 text-emerald-500'>Sign up</a></p>
      </form>
    </div>
  )
}

export default Login
