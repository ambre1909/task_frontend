import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Calender from './pages/Calender'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import Entry from './pages/Entry'

function App() {

  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}   ></Route>
        <Route path='/register' element={<Register></Register>}   ></Route>
        <Route path='/login' element={<Login></Login>}   ></Route>
        <Route path='/calender' element={<Calender></Calender>}   ></Route>
        <Route path='/entry' element={<Entry></Entry>}   ></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </>
}

export default App
