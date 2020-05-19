import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="rectangle4"></div>
        <div className="rectangle1">
          <h1 className="name">SOPHIE ALPERT</h1>
          <h3 className="rectangle3">PROGRAMMER</h3>
        </div>
      </div>
      <div className="App-links">
        <h2 className="underline">LINKS</h2>
        <ul className="unstyled-list">
          <li>
            <img className="socIcon" src="./linkedinIcon.png" alt="" />
            <span>LINKEDIN/username</span>
          </li>
          <li>
            <img className="socIcon" src="./twitterIcon.png" alt="" />
            <span>TWITTER/@user-handle</span>
          </li>
          <li>
            <img className="socIcon" src="./githubIcon.png" alt="" />
            <span>GITHUB/username</span>
          </li>
          <li>
            <img className="socIcon" src="./blogIcon.png" alt="" />
            <span>BLOG/blog-name</span>
          </li>
        </ul>
      </div>
      <div className="App-about">
        <h2 className="underline">ABOUT ME</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
          Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non
          augue egestas, dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at enim a,
          lacinia porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit lacus, tempus
          ac vehicula in, imperdiet dapibus elit. Nullam scelerisque euismod leo id vestibulum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
          Vestibulum vitae mattis diam.
        </p>
      </div>
      <div className="App-education">
        <h2 className="underline">EDUCATION</h2>
        <div>
          <h4>SCHOOL NAME</h4>
          <span className="d-block">2009 - 2013</span>
          <span className="d-block">Degree</span>
        </div>
        <div className="underline underline--short"></div>
        <div>
          <h4>SCHOOL NAME</h4>
          <span className="d-block">2009 - 2013</span>
          <span className="d-block">Degree</span>
        </div>
      </div>
      <div className="App-skills">
        <h2 className="underline">PERSONAL SKILLS</h2>
        <ul className="unstyled-list">
          <li className="pill">TEAMWORK</li>
          <li className="pill pill--acc1">COMMUNICATION</li>
          <li className="pill pill--acc2">ORGANIZATION </li>
        </ul>
      </div>
      <div className="App-technical">
        <h2 className="underline">TECHNICAL SKILLS</h2>
        <ul className="unstyled-list">
          <li className="pill">HTML</li>
          <li className="pill">CSS/SCSS</li>
          <li className="pill pill--acc1">JAVASCRIPT</li>
          <li className="pill pill--acc1">REACT.JS</li>
        </ul>
      </div>
      <div className="App-experience">
        <h2 className="xp-title underline">WORK EXPERIENCE</h2>
        <div className="xp-position">
          <h4 className="t-center">JOB POSITION</h4>
          <span className="d-block t-center">Company</span>
          <span className="d-block t-center">2018 - present</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
            Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non
            augue.
          </p>
          <ul>
            <li>Lorem ipsum dolor</li>
            <li>Consectetur adipiscing elit</li>
          </ul>
        </div>
        <div className="xp-position">
          <h4 className="t-center">JOB POSITION</h4>
          <span className="d-block t-center">Company</span>
          <span className="d-block t-center">2018 - present</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
            Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non
            augue.
          </p>
          <ul>
            <li>Lorem ipsum dolor</li>
            <li>Consectetur adipiscing elit</li>
          </ul>
        </div>
        <div className="xp-position">
          <h4 className="t-center">JOB POSITION</h4>
          <span className="d-block t-center">Company</span>
          <span className="d-block t-center">2018 - present</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
            Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non
            augue.
          </p>
          <ul>
            <li>Lorem ipsum dolor</li>
            <li>Consectetur adipiscing elit</li>
          </ul>
        </div>
      </div>
      <div className="App-contact">
        <div className="underline"></div>
      </div>
      <div>
        <div className="rectangle3">
          <h3 className="t-center">ADDRESS</h3>
        </div>
        <span className="d-block t-center">Imaginary St. 52,</span>
        <span className="d-block t-center">Vilnius, Narnia</span>
      </div>
      <div>
        <div className="rectangle3">
          <h3 className="t-center">CONTACT</h3>
        </div>
        <span className="d-block t-center">+37060000333</span>
        <span className="d-block t-center">email@test.dev</span>
      </div>
      <div>
        <div className="rectangle3">
          <h3 className="t-center">SOCIAL</h3>
        </div>
        <span className="d-block t-center">Linkedin/username</span>
        <span className="d-block t-center">Twitter/@user-handle</span>
      </div>
    </div>
  );
}

export default App;
