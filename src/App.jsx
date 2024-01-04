import React from 'react'
import { About } from './About'
import { Contact } from './Contact'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Nanbar } from './Nanbar'



const App = () => {
  return (
    <>
    <Nanbar/>

      <Routes>
        <Route  path='/' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>








    </>

  )
}

export default App;
