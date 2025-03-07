import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Experiance from './components/Experiance'

const App = () => {
  return (
    <div className="global-gradient-bg">
      <Header />
      <div>
        <Home />
        <About />
        <Projects />
        {/* <Experiance/> */}
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default App