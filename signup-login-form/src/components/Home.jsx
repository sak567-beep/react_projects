import React from 'react'
import { Navigate ,useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.removeItem("user");
    alert('log out successfully!')
    navigate("/");
  }
  return (
    <div className='flex justify-center  mt-10 gap-20 w-full '>
      <h1 className='text-center text-3xl font-bold'> Welcome to Home page</h1>
      <button  onClick={logout}className='bg-emerald-500 px-7 py-2 text-white font-bold rounded-full'>Log out</button>
    </div>
  )
}

export default Home
