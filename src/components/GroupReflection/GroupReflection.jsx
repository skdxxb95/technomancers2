import React from 'react'
import './groupreflection.css'
import GIT from '../../assets/github.png'

const GroupReflection = () => {
  return (
    <section id='groupreflection'>
      <div className='groupreflection'>
        <div className="groupreflection-content">
          <h1>Group Reflection</h1>
          <h5>Our view on how things went.</h5>
          <div>
            <h2>Sarah S.</h2>
            <p>I feel we have struggled to get into Assignment 3, and that the direction we need to take was harder to articulate and understand than with Assignment 2. We lost a team member as they withdrew from the course. And on top of that, the morale of our team was deeply impacted by the way we were treated by RMIT administration with regards to moving froward with enrolment. This has regrettably negatively impacted on the morale and overall wellbeing of our team. We were able to get past this and again work well as a team and contribute to completion. We have all been willing to ask for help. This is important when working in a team that workload support is a two way street. </p>
          </div>
          <div>
            <h2>Sam K.</h2>
            <p>
            The largest difference noted between assignment 2 and 3 is in regard to the whole moral behind continuing putting in effort when no students were informed of the changes within the university hand-over, this disregard of respect towards our group put a dent in our work ethic. With the loss of one member without warning caused even greater hassle but was overcome quickly by the backbones of our group. With regards to my own amount of work given, there isn’t a great deal due to sudden life changes and compassionate circumstances, all in all, I am grateful that the team understood this and continued to soldier through the work without much of my presence. The time spent on these past assignments was made fantastic by our awesome team. 
            </p>
          </div>
          <div>
            <h2>Sam B.</h2>
            <p>Reflecting on the recent group assignment, I feel proud of how well our team was able to communicate and support one another throughout the process. Even though we faced challenges with discrepancies in university enrolment, we were able to work through them together and keep each other motivated. I also recognize that our morale could have been improved during and after the emotional dip that we experienced. It was challenging to stay positive and focused, but I am proud of our ability to come together and muster up the motivation needed to finish the assignment. Through this experience, I have learned the importance of contributing to a team and being a supportive member. I now understand that working in a group can not only be effective in getting work done, but also provide a great support network. I am grateful for the opportunity to work with such a great team and for the lessons that I have learned. One aspect of the assignment that I found surprising was how evenly distributed the work was despite the difficulties we faced. However, I do not think that the GitHub log accurately represents the distribution of work. In my opinion, it was definitely an even split and I think we all contributed equally to the project. </p>
          </div>
          <div>
            <h2>Ally H.</h2>
            <p>I think we work well as group. The team morale was badly affected by the not knowing what was happening with the Bachelor of IT that some of us were planning on going on with. Also, the grading from our last assignment as it was felt that some parts that we lost grades on were not clearly defined in the assignment description. I think this is probably a part of academic learning though and we are to be expected to know these things. It was still a good score. Losing a team member was also a blow but understandable with the difficulties we had with all our work commitments and an 11 hour time difference.  But we have persevered, pulled together and continued to work as a team to complete our assignments. I love the Technomancers and have so enjoyed working with them and the whole Essentials of IT course. Thank you all. </p>
          </div>
          <div>
            <h2>Damian W.</h2>
            <p>
            The team has done an exceptional job, in spite of several things taxing and straining us. Getting yanked from CPT120. OUA (Open Universities Australia) and RMIT not telling us what is going on. Not knowing is going to happen, and the lack of motivation from what seems like a dead-end course that we were still going to have to pay for and get no benefit from. Not to mention my own personal life issues and concerns that have wreaked havoc on me. My Attention, Focus and Motivation has not been where it should be as a result of all these issues. The team has done well picking up the slack and reminding me of the stuff I still needed to complete.</p>
            <br></br>
            <p>I was able to get my parts done, but it took a good deal of prompting and assistance this time, And I appreciate and applaud their patience and understanding. Thx guys.
            </p>
          </div>
        </div>
          <div className="groupreflection-git">
              <img src={GIT} alt="Git" />
            </div>
            <div className='groupreflection-tags'>
              <p><i>(GitHub contributors insights)</i></p>
            </div>
        <div className="groupreflection-content">
          <div>
            <h2>Reflection as a Group</h2>
            <p>As a group, we encountered a number of obstacles while working on Assignment 3. One of the biggest challenges we faced was the lack of clear direction and understanding of what was expected of us. This made it harder for us to get started on the assignment and determine the best course of action to take. We had to spend a considerable amount of time discussing and clarifying the instructions and expectations for the project.</p>
            <br></br>
            <p>Despite this challenge, we were able to develop a plan of action through effective communication and collaboration. We recognized the importance of working together as a team and supporting each other throughout the process. We established regular meetings to discuss progress and identify areas that required additional attention. Unfortunately, we also had to deal with the loss of a team member who withdrew from the course. This was a blow to our team, and we had to work harder to pick up the slack. We were grateful for the dedication and commitment of the remaining members who were able to rally together and keep the project on track. Another challenge that impacted our team morale was the way RMIT administration handled the future enrolment process. This created a sense of uncertainty and anxiety among the group, which had a negative impact on our motivation and overall well-being. We felt that the university had not communicated effectively with us and that this had led to unnecessary stress and disruption to our work. Despite this setback, we were able to persevere and continue working together to complete the assignment.</p>
            <br></br>
            <p>Throughout the assignment, we learned a lot about the importance of effective communication and teamwork. We recognized that we were all in this together and that each team member had an important role to play. We also learned the value of asking for help when needed and being willing to support each other through the tough times. One aspect of the assignment that we found surprising was how evenly distributed the work was, despite the difficulties we faced. We were able to allocate tasks based on each member's strengths and interests, which led to a more balanced workload. However, we also recognized that the GitHub log may not accurately reflect the distribution of work. We felt that each member had contributed equally to the project, but this may not be apparent from the GitHub logs alone.</p>
            <br></br>
            <p>While Assignment 3 was not without its challenges, we are proud of the way we came together as a team to overcome them. We recognized the importance of effective communication, teamwork, and support, and we were able to apply these principles throughout the project. We are grateful for the lessons we learned and look forward to applying them in future projects.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GroupReflection