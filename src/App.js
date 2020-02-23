import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import Projects from './components/projects'
import CV from './downloads/JasonYao-CV.pdf'
import Contactme from './components/contact'
function App() {
  return (
  <body id="page-top" className="App">

    <Navbar>
    </Navbar>
    <div className="container-fluid p-0">

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          
          <h1 className="mb-0">Jason 
            <span className="text-primary"> Yao</span>
          </h1>
          <div className="subheading mb-5">Mobile: (+64)22 0771340,
            <a href="mailto:name@email.com"> jasonyao58246@gmail.com</a>
          </div>
          <p className="lead mb-5">Hi there! I'm a Computer Systems Engineering student studying at the University of Auckland graduating at the end of 2020. I'm extremely keen to find my place in the world and learn as much as I can during the journey with you!</p>
          <p className="lead mb-5">Experienced in C++, Java, Python, PHP, CSS, HTML and ReactJS.</p> 
          <div className="lead mb-5">
            <h2>Linkedin | Github | Twitter</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/jason-yao-s">
              <i className="fab fa-linkedin" ></i>
            </a>
            <a href="https://github.com/tigerj2">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/tigerj122">
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

            <Projects></Projects>


      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="contactme">
        <div className="w-100">
          <h1 className="mb-5">Contact me</h1>
          <div className="lead mb-5">
          <p>You can contact me regarding anything via this form. I usually reply within the day if I'm available!</p> 
          </div>

            <Contactme></Contactme>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          </div>

        </div>
      </section>

      <hr className="m-0"/>

    </div>
  </body>
 
    
    
  );
}

export default App;