import React from 'react'

import Home from './Compoents/Home'
import Navbars from './Compoents/Navbars'
import Hero from './Compoents/Hero'
import About from './Compoents/About'
import Skill from './Compoents/Skill'
import Projects from './Compoents/Projects'
import Experience from './Compoents/Experience'
import Certificate from './Compoents/Certificate'
import Contact from './Compoents/Contact'
import Footer from './Compoents/Footer'

const App = () => {
  return (
    <div>
     <Navbars/>
     <Hero/>
     <About/>
     <Skill/>
     <Projects/>
     <Experience/>
     <Certificate/>
     <Contact/>
     <Footer/>

    </div>
  )
}

export default App
