import React from 'react'
import './home.css'
import {VscGithub, VscGithubInverted, VscGithubAlt} from 'react-icons/vsc'
import {SlSocialGithub} from 'react-icons/sl'
import {FaGithubAlt, FaGithubSquare} from 'react-icons/fa'


const Home = () => {
  return (
    <section id='home'>
      <div className='introduction-title'>
        <h1>Technomancers</h1>
      </div>
      <div className="introduction">
        <div className='left-content'>
          <div className='introduction-content'>
            {/*----- SAMUEL K'S INTRODUCTION CONTENT ----*/}
            <h2>Samuel K.</h2>
            <p>
              test
            </p>
            {/*------ THIS IS WHERE YOU STOP ------*/}
          </div>
          <div className='introduction-content'>
            {/*----- DAMIAN'S INTRODUCTION CONTENT ----*/}
            <h2>Damian W.</h2>
            <p>
              test
            </p>
            {/*------ THIS IS WHERE YOU STOP ------*/}
          </div>
          <div className='introduction-content'>
            {/*----- SAMUEL B'S INTRODUCTION CONTENT ----*/}
            <h2>Samuel B.</h2>
            <p>
            My name is Sam, and I am a student at RMIT with the student number S3992963. I am originally from England, but grew up in Brisbane, Australia. Before starting my studies in the Bachelor of Information Technology, I worked in the hospitality industry. However, I have always had a personal interest in IT and recently decided to pursue a career in this field. I am particularly interested in software development and have a passion for understanding how things work and how they can be improved. In my spare time, I enjoy tinkering with electronics and programming. I have some experience in IT, including my experiences with the Twilight Hack and USB Gecko, which taught me a lot about problem-solving and working with electronics. I also have some experience with programming being something I enjoy doing in my spare time and experience in tech support, being my current career. I am excited to learn more about full stack development and other areas of IT as part of my studies at RMIT. I am part of the team Technomancer’s for this project. We are a group of dedicated and enthusiastic students with a shared interest in technology. 
            </p>
            {/*------ THIS IS WHERE YOU STOP ------*/}
          </div>
        </div>
        <div className='right-content'>
          <div className='introduction-content'>
            {/*----- SARAH'S INTRODUCTION CONTENT ----*/}
            <h2>Sarah S.</h2>
            <p>
            test
            </p>
            {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
            <div className='introduction-content'>
              {/*----- ALLY'S INTRODUCTION CONTENT ----*/}
              <h2>Ally H.</h2>
              <p>test
              </p>
              {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
        </div>
      </div>
      <div className='github-links'>
        <a href='https://stinclair.github.io/assessment_1/' target="_blank">
          <div>
            <VscGithub size='35' />
            <h3>Sarah S.</h3>
          </div>
        </a>
        <a href='https://skelly12316.github.io/MyProfile/' target="_blank">
          <div>
            <VscGithubInverted size='35' />
            <h3>Samuel K.</h3>
          </div>
        </a>
        <a href='https://barrinvorg.github.io/COSC2196---Assignment-1/' target="_blank">
          <div>
            <VscGithubAlt size='35' />
            <h3>Damian W.</h3>
          </div>
        </a>
         <a href='https://allyharper.github.io/Assignment-1/' target="_blank">
          <div>
            <FaGithubAlt size='35' />
            <h3>Ally H.</h3>
          </div>
        </a>
        <a href='https://skdxxb95.github.io/skdxxb95/' target="_blank">
          <div>
            <FaGithubSquare size='35' />
            <h3>Samuel B.</h3>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Home