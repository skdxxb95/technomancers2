import React from 'react'
import Home from './components/Home/Home'
import TeamProfile from './components/TeamProfile/TeamProfile'
import './index.css'
import ProjectIdea from './components/ProjectIdea/ProjectIdea'
import SkillsandJobs from './components/SkillsandJobs/SkillsandJobs'
import GroupReflection from './components/GroupReflection/GroupReflection'
import Navbar from './components/Navbar/Navbar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'

{/*------ PLEASE DON'T EDIT, RESPONSIBLE FOR ALL THE PAGES LINKING TO EACH OTHER ------*/}
{/*------ PLEASE DON'T EDIT, RESPONSIBLE FOR ALL THE PAGES LINKING TO EACH OTHER ------*/}
{/*------ PLEASE DON'T EDIT, RESPONSIBLE FOR ALL THE PAGES LINKING TO EACH OTHER ------*/}

const App = () => {
  return (
    <div className="container">
      <HashRouter>
      <Navbar />
        <Routes>
          <Route path ="/" element={<Home />}></Route>
          <Route path ="/teamprofile" element={<TeamProfile />}></Route>
          <Route path ="/projectidea" element={<ProjectIdea />}></Route>
          <Route path ="/skillsandjobs" element={<SkillsandJobs />}></Route>
          <Route path ="/groupreflection" element={<GroupReflection />}></Route>
        </Routes>
      <Footer />
      </HashRouter>
    </div>
  )
}

export default App