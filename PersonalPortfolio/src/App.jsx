import React from 'react'
import Navbar from './assets/Navbar'
import Hero from './assets/Hero'
import Aboutme from './assets/Aboutme'
import Skills from './assets/Skills'
import Qualification from './assets/Qualification'
import Service from './assets/Service'
import Projects from './assets/Projects'
import Footer from './assets/Footer'






function App() {

  const user = { "Name": "Archa", "Degree": "MCA", "Phone": "8301821658", "DoB": "28-01-1995", "Experience": "fresher", "Email": "archa@gmail.com" }

  const skillsets = [{ "name": "Python", "percentage": "80%" }, { "name": "Django", "percentage": "75%" }, { "name": "HTML", "percentage": "75%" }, { "name": "javascript", "percentage": "60%" }]
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Aboutme user={user}></Aboutme>
      <Skills skillsets={skillsets}></Skills>
      <Qualification></Qualification>
      <Service></Service>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  )
}

export default App
