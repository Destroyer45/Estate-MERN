import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Sign-in' element={<SignIn/>} />
      <Route path='/Sign-up' element={<SignUp/>} />
      <Route path='/Profile' element={<Profile/>} />

    </Routes>
    </BrowserRouter>
  )
}
