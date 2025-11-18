import React from 'react'
import Hero from './Component/Hero'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Page/Home'
import Contact from './Component/Page/Contact'
import Skills from './Component/Page/SkillsPage'
import Project from './Component/Page/Project'
// import Pdf from './Component/Page/Pdf'

const App = () => {
  return (
    <>
      {/* Hero ko sirf Home route par dikhana chaho to hataya ja sakta */}
      {/* <Hero/> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/resume' element={<Pdf/>} /> */}
        <Route path='/project' element={<Project />} />
         <Route path='/Skills' element={<Skills/>} />
      </Routes>
    </>
  )
}

export default App
