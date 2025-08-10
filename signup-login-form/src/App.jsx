import React from 'react'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
       <Navbar></Navbar>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Signup/>}> </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
           </Routes></BrowserRouter>
    </div>
  )
}

export default App
