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
          <div>
            <h2>Test</h2>
            <p>Hellooo</p>
          </div>
          <div>
            <h2>Hello 2</h2>
            <p>Alright Sarah's stuff can go here..</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectIdea