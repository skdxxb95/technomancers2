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
            My name is Samuel my student number is s3987667. My nationality is Australian, as is my whole family. I have lived in Bundaberg, Queensland for my whole 21 years of life. My highest level of education is currently Year 12, but I am currently enrolled in both IIT and Programming with RMIT University. My primary hobby when I am not working retail full time is gaming on my new PC which I built on my own with no experience or help apart from YouTube videos. Otherwise, I am spending time with my partner and our cat, rats, and fish. 
            </p>
            {/*------ THIS IS WHERE YOU STOP ------*/}
          </div>
          <div className='introduction-content'>
            {/*----- DAMIAN'S INTRODUCTION CONTENT ----*/}
            <h2>Damian W.</h2>
            <p>
            Hi, I'm Damian Whitman. RMIT Student number S3990599. I am a Huge Geek, whether its Games, Anime, Sci-Fi/Fantasy, or even Table top. I love it all. I have spent most of my life working in retail, fortunately for me it has been hardware rather the department stores. Even with that I have still been 'into' and love Computers. Every desktop PC I use at home is built by me, for me. I have kept my eye on the changing and evolving nature of the IT universe, and love reading up on the latest breakthroughs in all areas. I am Australian born and raised. I have been living, schooling, working and playing in Brisbane nearly my entire life. I have now reached a point in my life where I need to get out of the physical labour work, and find something that will let me keep working without placing any unnecessarily large strains on my body. With my interest in IT, and security conscious mindset. Cybersecurity is where I want to be. 
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
            Hi I’m Sarah Sinclair, Student S3998043. My work experience is in medical administration in both public and private healthcare. My hobbies include watching netball, walking, and spending time with family and friends. My interest in IT evolved from my current role working on the side of the business for a software as a service (Saas). My experience in IT is limited and has varied across different roles in different organisations. I have experience with being part of team rolling out software solutions to different parts of the business. Our team have democratically voted our name to be Technomancer’s. This came from an AI generated list of names for IT groups. 
            </p>
            {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
            <div className='introduction-content'>
              {/*----- ALLY'S INTRODUCTION CONTENT ----*/}
              <h2>Ally H.</h2>
              <p>
                Hi, my name is Ally Harper, my student number is s3997602 and I am a member of the RMIT student team Technomancer’s. I was born in Victoria, Australia but spent some time as a child living in Britain. I attended Bayswater secondary College and then Swinburne studying viticulture and enology. I am currently employed in a number of fields including bar attendant and musician. I have also taught music in the past. I am hoping to be able to work remotely in the future and there is a high demand for IT personnel, which is one of the reasons I am studying IT. I have a great interest in off grid solar technologies. I would also like to develop my own website and an app. I am finding coding fascinating and have quite an interest in security. Being a part of Technomancer’s is definitely helping me to learn more about IT, they area great team with plenty of knowledge in IT. 
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