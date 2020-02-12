import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import Projects from './components/projects'
import CV from './downloads/JasonYao-CV.pdf'
function App() {
  return (
    <div className="App">
    <body id="page-top">
  

  <Navbar>

    
  </Navbar>

  <div className="container-fluid p-0">

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-0">Jason 
          <span className="text-primary"> Yao</span>
        </h1>
        <div className="subheading mb-5">3 Dundale Avenue, Auckland, (+64)22 0771340,
          <a href="mailto:name@email.com"> jasonyao58246@gmail.com</a>
        </div>
        <p className="lead mb-5">Computer Systems Engineering student at the University of Auckland graduating at the start of 2021 currently looking for a graduate role. I'm extremely keen to find my place in the world and to learn as much as I can about software development</p>
        <p className="lead mb-5">Experienced in C++, Java, Python, PHP and ReactJS.</p> 
        <div className="lead mb-5">
          <h2>Linkedin | Github | Twitter</h2>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jason-yao-s">
            <i className="fab fa-linkedin" ></i>
          </a>
          <a href="https://github.com/tigerj2">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        </div>
        <div className="m-0">
        <h2>My Resume</h2>
        
        <a href={CV} download="JasonYao-CV.pdf"> <button className="mem">Download CV</button></a>
        
        
        </div>
      </div>
    </section>

    <hr className="m-0"/>

      <Projects></Projects>

    <hr className="m-0"/>

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div className="w-100">
        <h2 className="mb-5">Education</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">University of Colorado Boulder</h3>
            <div className="subheading mb-3">Bachelor of Science</div>
            <div>Computer Science - Web Development Track</div>
            <p>GPA: 3.23</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2006 - May 2010</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">James Buchanan High School</h3>
            <div className="subheading mb-3">Technology Magnet Program</div>
            <p>GPA: 3.56</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2002 - May 2006</span>
          </div>
        </div>

      </div>
    </section>

    <hr className="m-0"/>

    {/* <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fa fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-css3-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-js-square"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-angular"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-react"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-node-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-sass"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-less"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-wordpress"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-gulp"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-grunt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-npm"></i>
          </li>
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa fa fa-check"></i>
            Mobile-First, Responsive Design</li>
          <li>
            <i className="fa fa fa-check"></i>
            Cross Browser Testing &amp; Debugging</li>
          <li>
            <i className="fa fa fa-check"></i>
            Cross Functional Teams</li>
          <li>
            <i className="fa fa fa-check"></i>
            Agile Development &amp; Scrum</li>
        </ul>
      </div>
    </section>

    <hr className="m-0"/>

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
      <div className="w-100">
        <h2 className="mb-5">Interests</h2>
        <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
        <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
      </div>
    </section>

    <hr className="m-0"/>

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
      <div className="w-100">
        <h2 className="mb-5">Awards &amp; Certifications</h2>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa fa fa-trophy text-warning"></i>
            Google Analytics Certified Developer</li>
          <li>
            <i className="fa fa fa-trophy text-warning"></i>
            Mobile Web Specialist - Google Certification</li>
          <li>
            <i className="fa fa fa-trophy text-warning"></i>
            1<sup>st</sup>
            Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
          <li>
            <i className="fa fa fa-trophy text-warning"></i>
            1<sup>st</sup>
            Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
          <li>
            <i className="fa fa fa-trophy text-warning"></i>
            2<sup>nd</sup>
            Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
          <li>
            <i className="fa fa fa-trophy text-warning"></i>
            1<sup>st</sup>
            Place - James Buchanan High School - Hackathon 2006</li>
          <li>
            <i className="fa fa fa-trophy text-warning"></i>
            3<sup>rd</sup>
            Place - James Buchanan High School - Hackathon 2005</li>
        </ul>
      </div>
    </section> */}

  </div>
  </body>
  {/* <!-- Bootstrap core JavaScript --> */}
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  {/* <!-- Plugin JavaScript --> */}
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  {/* <!-- Custom scripts for this template --> */}
  <script src="js/resume.min.js"></script>
    </div>
    
  );
}

export default App;
