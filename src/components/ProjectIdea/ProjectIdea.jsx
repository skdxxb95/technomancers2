import React from 'react'
import PICO from '../../assets/rasppico.jpg'
import DUCK from '../../assets/duck.png'
import PHONE1 from '../../assets/phoneconcept1.png'
import PHONE2 from '../../assets/phoneconcept2.png'
import TRELLO from '../../assets/trello.png'
import TIMEFRAME from '../../assets/timeframe.png'
import './projectidea.css'

const ProjectIdea = () => {
  return (
    <section id='projectidea'>
      <div className='projectidea'>
        <div className="projectidea-content">
          <h1>DuckyPass</h1>
          <h5>Our Project Idea.</h5>
          <img src={PICO} className="projectidea-pico"></img>
            <div className='projectidea-overview'>
            <h2>Overview</h2>
            <img src={DUCK} className="projectidea-duck"></img>
            <p> The Technomancers project is
            to investigate the potential development and subsequent viability and uses
            for a device to be known as 'Duckypass'.</p> 
            <p>
            It is a personal
            password manager based on the Raspberry Pi Pico that would store the users
            encrypted passwords, assessable by one password and able to be used at any
            computer anywhere. Having the passwords on a portable device rather than in a
            cloud-based password manager reduces the risk from hackers gaining access to
            passwords. Having one password to access device and list of passwords means
            the user does not have to remember numerous passwords. Duckypass can also be
            remotely formatted/wiped so if lost, misplaced or stolen the information will
            not be accessible to anyone who finds it. Its relatively cheap cost will mean
            users can have a spare safely stored away in case of damage or loss. </p>
            <p>There are some external/hardware password managers available but most are
            online software still at risk of hacking.</p> 
            <p>The build behind Duckypass
            would be a relatively complex procedure. There are a range of tools and
            skills required including Raspberry Pi Pico, Micro-USB cabling, Bluetooth
            receiver and/or RFID chip, programming, App development and de-bugging. It
            will involve knowledge and use of hardware, software, encryption languages
            and also project development. Much of the software is available as
            Open-source reducing build cost but hardware will require a monetary source
            and technological knowledge will require upskilling by the team if we were to
            attempt production ourselves.</p>
            <br></br>
            <h2>Motivation</h2> 
            <ul>
            <li><img src={DUCK} className="projectidea-dotpointduck"></img> The motivation behind Duckypass is manyfold. The risk of losing access to logins due to forgotten passwords. Who has not forgotten a password at some point?</li> 
            <li><img src={DUCK} className="projectidea-dotpointduck"></img> The risk of unauthorised access to logins due to passwords being hacked in cloud-based managers.</li>
            <li><img src={DUCK} className="projectidea-dotpointduck"></img> The ability to have a separate password for each login, which is recommended but pretty hard to remember and therefore impracticable. This again will reduce the risk of nefarious access.</li>
            <li><img src={DUCK} className="projectidea-dotpointduck"></img> The ability to login when no internet available. The information you require to login is on the device not in the cloud, you do not need internet connection to access data.</li> 
            </ul>
            <br></br>
            <h2>Landscape</h2>
            <img src={DUCK} className="projectidea-duck"></img>
            <p>There are many passwords managers available. The three most common are desktop, such as Onlykey and RedZone, these managers are able to be used offline, are encrypted and need a passcode to use, and have a lockout mechanism after a number of incorrect passcode attempts. Cloud-based, there are many cloud-based managers but these have a few drawbacks. Always needing internet connection, believe it or not, not everywhere has internet connection. You may want to access certain files on your or another collaborators computer at some secluded log cabin but Oh, no! No internet. Risk of an online breach, hacking, malware and probably some as yet unheard-of way for people to gain access to passwords. Single point of failure, should a hacker somehow obtain your password, but this risk can be reduced by two factor authentication. Also, some online password managers do not work with all websites. And there are Single sign-on password managers but these are generally used inside a corporation for worksites hosted internally. </p>
          </div>
          <div>
            <h2>Aims</h2>
            <br></br>
            <p>The main aim of this project is to create an effective password management solution that can address the ever-growing risk of data breaches. The project intends to develop a compact and portable device called DuckyPass, which can store and manage passwords on a USB drive. DuckyPass aims to provide a secure alternative to web-based password managers, which are at risk of data breaches. To achieve this aim, the project has set several smaller goals. One of the goals is to get a prototype of the device working. This involves a combination of technical skills, including programming, circuit design, microcontroller programming, encryption, and security. The team will need to acquire knowledge in these areas to develop a working prototype. </p>
            <br></br>
            <p>One of the initial goals is to acquire funding to cover the costs of developing and testing the device. Depending on the complexity of the device, the costs can vary, and the development team will need to research and obtain the necessary hardware components and equipment. Additional resources, such as testing equipment and professional expertise in testing and quality assurance, may need to be obtained as well. The project also aims to innovate the password management market. The device's customizable feature based on DuckyScript and added security measures will set it apart from generic password managers. The project will also aim to gather market research and develop an understanding of app development, circuit design, and project management. This understanding will help the team make informed decisions and build a device that caters to the needs and preferences of the target audience. </p>
            <br></br>
            <p>Developing a mobile application for the DuckyPass device is an important goal for the project, as it allows for an additional layer of security through two-factor authentication. The mobile app would allow users to control and manage their device remotely and enable them to use their mobile phone as a second authentication factor to access their passwords. This would be particularly useful when using the DuckyPass device on a public computer or in a situation where the physical device may be misplaced or stolen. The app would also allow users to view and manage their password database on their mobile device, further increasing the device's convenience and accessibility. This goal should be prioritized as it not only provides a valuable feature to the DuckyPass device but also increases the product's marketability and usability. However, if time and resources become limited, the team should focus on completing the development of the physical device and its primary functions before developing the mobile app. </p>
            <br></br>
            <p>To effectively achieve the ambitious goals of this project, prioritization is crucial. If the development team faces any limitations, the main objective should always be to create a reliable and secure password management solution. The team should focus on getting a working prototype and testing it for security and reliability. As for the mobile application, it is important to develop a user-friendly interface and ensure that it integrates seamlessly with the device. Although additional features and enhancements could be added later, the security and reliability of both the device and mobile application should never be compromised. While acquiring funding is necessary, it is not as crucial as ensuring that the device and application work as intended. Lastly, while it is important to stay ahead of the competition and innovate the password management market, the main focus should always be on delivering a secure and effective solution. </p>
            <br></br>
            <p>Overall, the DuckyPass project has clear goals that are interdependent on one another. The primary aim is to create a secure and effective password management solution, and the smaller goals of getting a prototype working, acquiring funding, and innovating the password management market are all essential steps towards achieving this aim. The development team needs to prioritize these goals and ensure that they are focusing on the most critical aspects of the project. </p>
          </div>
          <div>
            <h2>Plans and Progress</h2>
            <br></br>
            <p>The DuckyPass project aims to create a compact and portable password manager device that allows users to securely store and manage their passwords on a USB drive. The device will be easy to use, and it will allow users to store their passwords locally on the physical device and easily access them from any computer. Additionally, the device's portability will allow users to access their passwords even when traveling or using a public computer, without requiring an internet connection. Moreover, the DuckyPass project's primary objective is to solve the common problem of managing and remembering multiple passwords. The device is designed to be portable, enabling users to carry it around effortlessly and use it whenever they need to access their passwords. By eliminating the need for remembering multiple passwords, the device aims to simplify the user's life and provide them with a hassle-free experience. Password management is a crucial part of ensuring online security, and the DuckyPass project aims to make it easier and more secure for users. With the rise of cyber threats and data breaches, the need for strong passwords and secure storage has become more critical than ever. Many people struggle to remember multiple passwords, leading them to use the same password across multiple accounts, making them more vulnerable to attacks. The DuckyPass device aims to address this issue by providing a secure and convenient way to manage passwords. The DuckyPass device uses encryption algorithms to protect user data, and the device is designed to be tamper-proof and prevent unauthorized access. The device's simplicity and portability make it ideal for people who are always on the go, such as travellers, students, and business professionals. The device eliminates the need for users to rely on cloud-based password managers, which can be vulnerable to data breaches and other security risks. The DuckyPass project is also focused on user experience, with a simple and intuitive interface that allows users to access their passwords quickly and easily. The device's physical design is compact and lightweight, making it easy to carry around without adding any extra bulk or weight to the user's luggage or pockets. The DuckyPass team recognizes that password management can be a stressful and frustrating experience for many users, and the device is designed to simplify this process and provide users with peace of mind knowing that their passwords are secure. </p>
            <br></br>
            <p>The development of the DuckyPass project requires a combination of technical skills and knowledge, such as hardware, software, encryption, security, and microcontroller programming, as well as project management skills to plan and organize the development process. The development team should work towards gaining experience in app development and circuit design to bring the project to fruition. The DuckyPass device will use advanced encryption and security protocols to ensure that the stored passwords are safe and secure. Additionally, the device will not rely on cloud-based storage, which can be vulnerable to hacking or data breaches. Instead, users will have complete control over their passwords, and they can choose to back up their data to a separate storage device or computer. The DuckyPass team understands the importance of security in a password manager device and has made it a top priority in the development process. The device will use AES encryption, a widely used and secure encryption standard, to protect user data. The team has also worked to ensure that the device's hardware and software are secure from potential attacks, such as through firmware updates or physical tampering. To further enhance security, the DuckyPass device will also include features such as two-factor authentication and the ability to set a master password. Two-factor authentication adds an extra layer of security by requiring users to enter a code sent to their phone or generated by an app, in addition to their master password. This makes it harder for unauthorized users to access the device and the user's stored passwords. Furthermore, the master password is the key to unlocking the device and accessing the stored passwords. The DuckyPass team recognizes the importance of choosing a strong and secure master password and encourages users to do so. In case the user forgets their master password, there will be a password recovery option, which will require the user to answer security questions they set up during the device's setup process. </p>
            <br></br>
            <p>In addition to the physical device, the development team has started planning for the mobile app. The original idea was to use only buttons to enter one-time passwords (OTP) and handle two-factor authentication (2FA) for the device. However, this idea was dropped in favor of using a mobile application to handle the 2FA process. The mobile app will work in conjunction with the physical device to provide a more secure and user-friendly experience. The app will generate OTP codes for 2FA, and the physical device will store the passwords and provide an extra layer of security.</p>
            <br></br>
            <div className="projectidea-phone">
              <img src={PHONE1} alt="Phone 1" />
              <img src={PHONE2} alt="Phone 2" />
            </div>
            <div className='projectidea-tags'>
              <p><i>(Mobile application concept design)</i></p>
            </div>
            <br></br>
            <p>To ensure the DuckyPass device's success, the development team will need to conduct extensive user testing and gather feedback to improve the device's functionality and usability continually. They will also need to stay up to date with the latest developments in encryption and security technologies to ensure that the device remains secure and reliable. The mobile app's development will be a critical aspect of the DuckyPass project, as it will play a vital role in the overall user experience. The app will need to be user-friendly, intuitive, and easy to navigate, allowing users to manage their passwords efficiently. It will also need to work seamlessly with the physical device, ensuring that data is synchronized accurately and securely. The development team will need to consider different operating systems and devices to ensure that the app is compatible with a wide range of devices.Another essential aspect of the DuckyPass project is the development of technical documentation, such as user manuals and tutorials. The documentation should be clear and concise, enabling users to set up and use the device and app easily. The development team should consider the user's perspective and include helpful tips and guidelines to improve the user experience. This documentation will also be crucial for providing support and troubleshooting to users who may encounter issues or have questions. </p>
            <br></br>
            <p>Currently, a basic functional prototype has been created for the physical device that utilizes buttons and breadboard wiring to function, but it's not yet a fully functional product and serves as a proof of concept. The DuckyPass team still needs to finalize the hardware design and create a more polished and user-friendly physical device. Additionally, the team has started working on a concept idea and initial planning for the mobile app, but the app has not yet been developed or fully integrated with the physical device. The final product will need to have a fully functioning mobile app that can communicate with the physical device and handle two-factor authentication. The  DuckyPass project has made some progress, but there is still a long way to go before it can achieve its goal of becoming a complete and functional password manager device that provides added peace of mind and protection for sensitive information. During the development process, there have been insignificant dead ends that were easily worked around with research and review. The team has made progress in learning and implementing the necessary programming languages and tools, including DuckyScript and Circuit Python. They have also gained experience in circuit design and the use of PCB layout tools such as Eagle PCB. To ensure security, the team has worked on developing an understanding of encryption algorithms, specifically AES, and how to implement them in software. To bring the DuckyPass project to its goal, the development team needs to overcome various challenges and work hard to refine and improve the product. One of the main challenges is creating a physical device that is compact, portable, user-friendly, and secure. The development team needs to focus on the device's design, layout, and components to ensure that it is easy to use and reliable. Moreover, they need to make sure that the device can withstand everyday wear and tear and is resistant to damage. The team will need to conduct extensive user testing to identify any issues and gather feedback on how to improve the device's usability and functionality. Another significant challenge is developing the mobile app that can work seamlessly with the physical device. The app will be responsible for generating OTP codes for 2FA and managing user accounts. The development team will need to use the latest app development tools and frameworks to create a secure and user-friendly mobile app. They will also need to ensure that the app can communicate with the physical device reliably and that the data transfer between the app and the device is secure.To overcome these challenges, the development team needs to work closely together and collaborate effectively. They need to allocate the necessary resources, including time, money, and personnel, to ensure that the project stays on track and is completed within the set timeline. Moreover, the team needs to stay updated with the latest developments in encryption and security technologies and incorporate them into the DuckyPass project to make it as secure and reliable as possible. With perseverance, hard work, and dedication, the DuckyPass team can create a product that simplifies users' lives and provides them with added peace of mind and protection for their sensitive information. </p>
            <br></br>
            <p>Moving forward, the development team plans to continue refining and improving the physical device, as well as completing the development of the mobile app. They also plan to test and evaluate the product thoroughly to ensure that it is secure, reliable, and user-friendly. Technical documentation, such as user manuals, will be created to help users understand how to use the device and app. The DuckyPass project is a complex undertaking that requires a combination of technical skills and knowledge, as well as project management expertise. The development team has made significant progress, by creating a basic functional prototype and starting planning for the mobile app. The team plans to continue refining and improving the device and app, and thoroughly testing the product to ensure its security, reliability, and user-friendliness. In conclusion, the DuckyPass project aims to create a portable and secure password manager device that can help users manage and remember multiple passwords effortlessly. The device is designed to be easy to use and can store passwords locally on the physical device, ensuring that the user has complete control over their passwords. The development team plans to create a mobile app that can work with the device to provide a more user-friendly and secure experience. To achieve its goal, the team needs to combine technical skills and knowledge, such as hardware, software, encryption, security, and microcontroller programming, with project management skills to plan and organize the development process. Although the DuckyPass project has made some progress, there is still much work to be done before it becomes a fully functional product. However, the development team's commitment to refining and improving the device and app is an encouraging sign, and we can look forward to seeing the final product's success in the future. </p>
          </div>
          <div>
            <h2>Roles</h2>
            <h5><i>Definition of IT project team roles</i></h5>
            <h3>Lead Developer</h3>
            <p>The role of the lead developer includes project planning and management, assist with setting milestones, ensuring our team is meeting our objective.	And to ensure the development approach is right for our Duckypass device and the functionality will meet the needs of our intended users. Our Lead Developer will be responsible for technical guidance and direction. And ensuring our team adheres to best practice with regards to security and privacy. </p>
            <br></br>
            <h3>Technical Designer</h3>
            <p>Technical designer would be responsible for designing the technical architecture of the Duckypass. They will work with the team to ensure that the architecture is scalable, efficient, and will meet the technical requirements of our product. The tech designer will oversee the development process to ensure that the product is being built according to the technical specifications and that any issues are identified and resolved.</p>
            <br></br>
            <h3>Project Coordinator</h3>
            <p>The project coordinator or manager assist with defining the project scope and objectives, which includes identifying the deliverables and outcomes of the project. The project coordinator must delegate tasks, providing guidance and support, and monitoring team performance. They must also ensure that the team is working together effectively and that communication is clear and effective. Ensure the project is delivered on time and within budget.</p>
            <br></br>
            <h3>User Interface Designer</h3>
            <p>The UI designer must understand the needs of the users and gather information about their preferences, behaviours, and goals to create and contribute to the design that is intuitive and user-friendly. The UI designer will create a visual design for the product that is aesthetically pleasing and consistent with the objective outlined for the Duckypass product.</p>
            <br></br>
            <h3>Researcher</h3>
            <p>The researcher may conduct market research to evaluate the demand for the product, identify potential competitors, and review trends in the market. The key researcher may conduct research on other emerging technologies and industry best practices to identify potential areas of innovation and improvement. The role of the research may provide insights and recommendations to the team based on their research findings, such as suggesting new features or improvements to the product's design or functionality.</p>
            <br></br>
            <h3>Technomancer’s Project Roles </h3>
            <p>The Technomancer’s project was based off the existing design work already completed by team member Sam Bruce. We were all impressed by the idea and the extent with which Sam had already progressed with his project. Since then, we have worked together as a team to further discuss the progress of Duckypass and how this device could progress to a completed marketed product. Technomancer’s general processes are to always work collaboratively and to assign work as we progress with our project discussions. The Technomancer’s work collaboratively at most times however as Sam B quite rightly has taken the role of Lead Developer and Technical Developer. As we all discuss the project together in our meetings most team members in particular Sam K, Damian and Ally take on such roles as Technical developer and User Interface Designer. This happens naturally as we work through the project requirements together. Ally has taken on work that involves researching and project coordination. Sarah S has mostly worked in the role as a project coordinator, coordinating meetings and agenda; and has also taken on research where required to assist with the delivery of our project.</p>
          </div>
          <div>
            <h2>Scopes and Limits</h2>
            <br></br>
            <p>The scope of the DuckyPass project is to develop a password manager device that securely stores passwords on a USB drive, allows easy access to them, and provides added security through encryption algorithms and customizable features based on DuckyScript. The project will require a team with expertise in programming, circuit design, encryption, microcontroller programming, app development, and project management. The time scope we aim to achieve in the project is 15 weeks. It is important to recognize that a project like this is never really complete, but rather a continual process of improvement and updates. The development team must set priorities and focus on developing the most essential features within the given time frame. Some features may take too long to develop, and the team should prioritize those that are most critical for the device's functionality. It's also important to show a proof-of-concept before implementing every feature to ensure that the project is on the right track. </p>
            <br></br>
            <p>In terms of specific features, biometric scanning, facial recognition, and fingerprint scanning will not be included in the project as they would take too long to integrate within the given time frame. Depending on how things go, RFID technology may be chosen over the initial Bluetooth. The development team must avoid the phenomenon of 'scope creep’, which occurs when the project expands beyond the initial scope, leading to delays and cost overruns. To prevent scope creep, the team must focus on the essential features and prioritize them accordingly. At the end of the 15 weeks, the development team should be able to demonstrate a basic prototype that has buttons responsible for the device's functionality, such as password storage, retrieval, and deletion. The device should be able to securely store and manage passwords and allow easy access to them. The team should also provide documentation outlining the device's specifications, functionality, and security measures. </p>
            <br></br>
            <p>The DuckyPass project aims to develop a password manager device that provides a convenient and secure alternative to web-based password managers. The development team should set priorities and focus on the essential features within the given time frame. Biometric scanning, facial recognition, and fingerprint scanning will not be included in the project, and the team must avoid scope creep to ensure that the project stays within the initial scope and timeline. The team must show a proof-of-concept before implementing every feature and provide documentation outlining the device's specifications, functionality, and security measures. </p>
          </div>
          <div>
            <h2>Tools and Technologies</h2>
            <br></br>
            <p>Developing the DuckyPass project is a complex task that involves the use of various tools and skills. The following tools will be required: </p>
            <ul>
            <li>Raspberry Pi Pico: A low-cost microcontroller board that provides the power and versatility needed for the device. </li>
            <li>DuckyScript: A simple scripting language used to program the device. This will be the language responsible for password input.  </li>
            <li>Micro-USB cable: Used to connect the Raspberry Pi Pico to a computer for programming and testing. </li>
            <li>Bluetooth Receiver: Integrated into the device for wireless communication with the mobile app. </li>
            <li>Text editor: Used to write and edit scripts in DuckyScript. </li>
            <li>Encryption algorithms: AES is used to encrypt, and decrypt stored passwords. </li>
            <li>Phone App development tools: A mobile app development tool such as React Native is used to develop the mobile app. </li>
            <li>Integrated Development Environment (IDE): Used for coding and debugging the DuckyScript and CircuitPython. </li>
            <li>PCB design tools: EaglePCB is used to design the circuit board for the device. </li>
            <li>Circuit simulation tools: LTSpice is used to simulate the circuit before building the prototype. </li>
            <li>Project management tools: Trello will be used to organize and track the progress of the development. </li>
            </ul>
            <br></br>
            <p>The following skills are required to develop DuckyPass: </p>
            <ul>
            <li>Programming: A good understanding of Python, C/C++, DuckyScript, and CircuitPython. </li>
            <li>PCB design: Knowledge of circuit design and experience with PCB layout tools like Eagle PCB. </li>
            <li>Microcontroller programming: Experience with programming microcontrollers, specifically the Raspberry Pi Pico. </li>
            <li>Encryption: A good understanding of encryption algorithms, specifically AES, and experience in implementing them in software. </li>
            <li>Mobile App development: Knowledge in mobile app development, specifically in React Native. </li>
            <li>Bluetooth communication: Experience in implementing Bluetooth communication in software. </li>
            <li>Project management: Experience in managing and organizing a development project and using project management tools such as Trello. </li>
            <li>Circuit simulation: Familiarity with circuit simulation tools such as LTSpice. </li>
            <li>Debugging: Experience in debugging software and hardware issues. </li>
            <li>Technical documentation: Experience in creating technical documentation, such as user manuals. </li>
            </ul>
            <br></br>
            <p>Regarding software licenses, most of the software tools mentioned above are open-source and available for free, with permissive licenses that allow for commercial use. However, some tools may require commercial licenses if the development team intends to use the tools for commercial purposes. For example, the Eagle PCB design software requires a commercial license for commercial use. It's important to note that the precise versions of each software tool or hardware component required for the project may vary depending on the specific needs of the project, and the versions that the development team is most comfortable with. </p>
            <br></br>
            <div className="projectidea-phone">
              <img src={TRELLO} alt="trello" />
            </div>
            <div className='projectidea-tags'>
              <p><i>(Trello project management)</i></p>
            </div>
            <br></br>
            <p>This project is a complex task that requires a diverse range of skills and tools to develop. Each member of the team has unique experiences and knowledge that could be valuable to the project's success. Each member's skills and experiences will be discussed and how they could contribute to the DuckyPass project. </p>
            <br></br>
            <p>Sam B has experience with many of the tools and skills required for the project, including Raspberry Pi Pico, DuckyScript, React, HTML, CSS, Git, JavaScript, basic cybersecurity, and tinkering with hardware components. This broad skill set makes him a valuable member of the team, and he could contribute in multiple ways. He will write and edit DuckyScript and use his knowledge of React and HTML/CSS to develop the mobile app's user interface. He will also use his experience with basic cybersecurity to ensure the passwords are kept secure. </p>
            <br></br>
            <p>Damian has experience with HTML, CSS, Git, and has recently picked up React. He will use this knowledge to assist in developing the mobile app's user interface and functionality. He will also use his familiarity with Git to help the team track and manage changes to the project's code. Additionally, he will be helping with project management by using Trello to organize and track the development progress. </p>
            <br></br>
            <p>Sarah's past experience in management and HTML and CSS will be valuable for the DuckyPass project, as they will assist in managing the development team, tracking progress, and creating technical documentation such as user manuals. She will also contribute to the development of the mobile app's user interface using HTML and CSS. </p>
            <br></br>
            <p>Ally's experience in HTML, CSS, Git, and React will be used to assist in the development of the mobile app's user interface and functionality. She will also use her basic Git knowledge to help the team track changes to the project's code. She will also contribute to debugging software and hardware issues and help with the project management by using Trello to track and organize the development progress. </p>
            <br></br>
            <p>Sam K's prior experience in management, programming, HTML, CSS, and basic Git and React knowledge will be valuable for the DuckyPass project. He will use his experience to assist in managing the development team, writing and editing DuckyScript, and developing the mobile app using React Native. He will also use his programming knowledge to debug software and hardware issues and use Trello to track and organize the development progress. </p>
            <br></br>
            <p>All members of the group have vast experience in research and implementation, which could be used to conduct research on various tools and technologies used in the project, identify, and address any technical issues, and ensure the project's successful implementation. They could also use their experience to collaborate effectively and communicate efficiently to achieve the project goals.</p>
          </div>
          <div>
            <h2>Testing</h2>
            <br></br>
            <p>Testing and quality assurance are critical aspects of the development process for DuckyPass. There are several stages of testing that the development team should consider. Firstly, during the software development stage, the team can conduct unit tests, integration tests, and system tests to identify and resolve any software bugs or issues. The team can also use simulation tools such as LTSpice to simulate the circuit before building the prototype, to ensure that the hardware is functioning properly. Once the hardware prototype is built, the team can conduct hardware tests to ensure that the device is functioning correctly. This can include testing the device's physical buttons, LED indicators, and USB communication. The team can also conduct compatibility tests to ensure that the device is compatible with a variety of operating systems and devices. </p>
            <br></br>
            <p>User testing is also an important aspect of the development process. The team can conduct user testing to gather feedback from potential users and identify any issues with the device's usability and functionality. The team can find test users through various methods, such as social media, online forums, or by reaching out to individuals who have expressed interest in the product. The number of test users needed will depend on the scope of the testing and the team's resources, but typically, a sample size of at least 10-20 users is recommended. To determine the success of the project, the team can use several metrics such as the device's speed and efficiency in storing and retrieving passwords, the security of the stored passwords, and the ease of use and portability of the device. The team can also gather feedback from test users and make improvements based on their feedback. Once the device meets the team's standards and has received positive feedback from test users, the team can consider the project a success.  </p>
          </div>
          <div>
            <h2>Timeframe</h2>
            <div className="projectidea-timeframe">
              <img src={TIMEFRAME} alt="Timeframe" />
            </div>
            <div className='projectidea-tags'>
              <p><i>(Table of our roles and progress throughout the 15 week timeframe)</i></p>
            </div>
          </div>
          <div>
            <h2>Risks</h2>
            <br></br>
            <p>As with any technology project, there are specific risks associated with the development of DuckyPass. One of the main risks is the potential for security vulnerabilities in the device's hardware and software. As the device will be used to store sensitive information, it's crucial to ensure that it's protected against any potential hacking attempts or breaches. The development team will need to ensure that the encryption algorithms used are robust and that the device's firmware is secure. Another potential risk is the complexity of the device. DuckyPass will combine various technologies such as microcontroller programming, encryption, Bluetooth communication, and mobile app development. It's important to ensure that the device is user-friendly and intuitive to use while still providing robust security. The development team will need to prioritize user experience and simplicity during the design process, to avoid overwhelming users with too many features or technical jargon. </p>
            <br></br>
            <p>There is also a risk of delays in the development process due to unforeseen technical issues or complications. As the project involves both hardware and software development, it's possible that unexpected issues could arise, which could lead to delays in the project's timeline. The team will need to plan for contingencies and be prepared to address any unexpected issues as quickly as possible to avoid delays. Finally, there is a risk of limited market demand for the DuckyPass device. While password management is a crucial concern for many individuals and businesses, there are many existing password management tools and services available on the market. The development team will need to ensure that the device provides unique and valuable features that differentiate it from existing solutions and meet the needs of potential customers. This may involve conducting market research and consulting with potential customers to ensure that the device meets their needs and preferences. </p>
            <br></br>
            <p>Aside from the project as a whole, there are also potential risks and issues that may arise during the development and implementation of the DuckyPass itself. Some possible hardware issues that could occur include:</p> 
            <ul>
            <li>Power-related issues: One potential issue that could arise with the DuckyPass is power-related problems. The device requires a certain amount of power to operate, and if the power source is not sufficient or is unstable, this could cause problems with the device's functionality. </li>
            <li>Circuitry issues: Another possible issue that could occur is related to its circuitry. If the design of the circuit board is not optimized or if there are errors in the layout, this could lead to hardware issues such as shorts or faulty components. </li>
            <li>Compatibility issues: The DuckyPass relies on multiple components to function properly, such as the Raspberry Pi Pico, USB drive, and Bluetooth module. If there are compatibility issues between these components, the device may not function as intended. </li>
            <li>Mechanical issues: Another possible issue that could occur is mechanical issues. The device's housing and components must be properly assembled, and if there are issues with the design or assembly, this could lead to problems with the device's functionality or durability. </li>
            </ul>
            <br></br>
            <p>The risks associated with the DuckyPass project can be managed through careful planning, testing, and ongoing evaluation throughout the development process. Additionally, the team should have a contingency plan in place in case any issues arise and be prepared to make modifications to the design or components if needed. Finally, the team should be open to feedback and actively seek out expertise in hardware development to ensure that the device is secure, reliable, and user-friendly. </p>
          </div>
          <div>
            <h2>Group Processes and Communications</h2>
            <br></br>
            <p>From our group's experience, it is evident that effective communication is vital for the success of a group assignment. We have found Microsoft Teams to be an excellent platform for group communication, and we plan to continue using it for future projects. In addition, we have also used Discord for communication, but it was not as effective as Teams.</p>
            <br></br>
            <p>As far as the frequency of meetings is concerned, we have found that meeting twice a week over Teams webcam chat worked well for us. However, this frequency may vary depending on the assignment and group's availability. It is crucial to find a schedule that works for everyone in the group. Our team has used face-to-face meetings on Microsoft Teams and has found it to be an effective way to communicate. However, we are also open to using other communication technologies such as email, text, or other platforms that we may find useful in the future. </p>
            <br></br>
            <p>In the case where a group member does not respond to communications, we would try to contact them through alternative means, such as email or phone. If that fails, we will discuss with the remaining group members and decide the best way forward, which may include assigning the missing member's responsibilities to the remaining team members or seeking help from the instructor.</p>
            <br></br>
            <p>Overall, effective communication and frequent meetings are essential to ensure the success of a group assignment. Our experience has shown that Microsoft Teams is an excellent platform for group communication, and we plan to continue using it in the future.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectIdea