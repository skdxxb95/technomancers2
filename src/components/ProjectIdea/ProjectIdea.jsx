import React from 'react'
import PICO from '../../assets/rasppico.jpg'
import './projectidea.css'

const ProjectIdea = () => {
  return (
    <section id='projectidea'>
      <div className='projectidea'>
        <div className="projectidea-content">
          <h1>DuckyPass</h1>
          <h5>Our Project Idea.</h5>
          <img src={PICO}></img>
          
        </div>
      </div>
    </section>
  )
}

export default ProjectIdea