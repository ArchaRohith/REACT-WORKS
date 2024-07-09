import Nav from "./Nav"

import Banner from "./Banner"

import Footer from "./Footer"
import Header from "./Header/Header"
import Profile from "./Profile/Profile"
import Skills from "./assets/Skills"
import Project from "./assets/Project"
import Education from "../Education"





function App() {
  const qulifications=[
    {"name":"MCA","university":"MG","grade":"o"},

    {"name":"BCA","university":"MG","grade":"o"},

    {"name":"BBA","university":"MG","grade":"o"},

    {"name":"MCA","university":"MG","grade":"o"},

    {"name":"BCA","university":"MG","grade":"o"},
    
    {"name":"BBA","university":"MG","grade":"o"},
]

const profileTitle="Backend Developer"

  return (

    <div>
      <Nav></Nav>

      <Banner></Banner>
 <Education qulifications={qulifications}></Education>

      <Footer></Footer>

      <Header></Header>

      <Profile profileTitle={profileTitle}></Profile>

      <Skills></Skills>
      <Project></Project>
    </div>
  )
}
export default App
