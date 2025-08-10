import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
      <nav className='bg-[#222] text-white py-1 w-full relative'>
        <ul className='flex items-center text-left gap-15 p-5 px-20 font-semibold'>
          <li className='text-xl font-bold text-emerald-500'>Explore!</li>
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
