import React from 'react';
import './App.css';
import ContentBlock from './components/ContentBlock';
import Title from './components/Title';
import TitleRectangle from './components/TitleRectangle';
import LinksBlock from './components/LinksBlock';
import PillsList from './components/PillsList';
import SocialLinks from './components/SocialLinks';
import JobBlock from './components/JobBlock';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="rectangle4"></div>
        <div className="rectangle1">
          <Title level="1">SOPHIE ALPERT</Title>
          <TitleRectangle title="PROGRAMMER"></TitleRectangle>
        </div>
      </div>
      <ContentBlock title="LINKS" className="App-links">
        {' '}
        <SocialLinks
          links={[
            { text: 'LINKEDIN/username', icon: './linkedinIcon.png', ref: '#' },
            { text: 'TWITTER', icon: './twitterIcon.png', ref: '#' },
            { text: 'TWITTER', icon: './githubIcon.png', ref: '#' },
            { text: 'TWITTER', icon: './blogIcon.png', ref: '#' },
          ]}
        ></SocialLinks>
      </ContentBlock>
      <ContentBlock title="ABOUT ME" className="App-about">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
          Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non
          augue egestas, dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at enim a,
          lacinia porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit lacus, tempus
          ac vehicula in, imperdiet dapibus elit. Nullam scelerisque euismod leo id vestibulum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
          Vestibulum vitae mattis diam.
        </p>
      </ContentBlock>
      <ContentBlock title="EDUCATION" className="App-education">
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
      </ContentBlock>
      <ContentBlock title="PERSONAL SKILLS" className="App-skills">
        <PillsList
          items={[
            { text: 'TEAMWORK' },
            { text: 'COMMUNICATION', modifier: 'acc1' },
            { text: 'ORGANIZATION', modifier: 'acc2' },
          ]}
        ></PillsList>
      </ContentBlock>
      <ContentBlock title="TECHNICAL SKILLS" className="App-technical">
        <PillsList
          items={[
            { text: 'HTML' },
            { text: 'CSS/SCSS' },
            { text: 'JAVASCRIPT', modifier: 'acc1' },
            { text: 'REACT.JS', modifier: 'acc2' },
          ]}
        ></PillsList>
      </ContentBlock>
      <ContentBlock title="WORK EXPERIENCE" className="App-experience">
        <div className="grid-3col">
          <JobBlock job={{ company: 'Company', years: '2018 - present' }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
              Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse
              non augue.
            </p>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </JobBlock>
          <JobBlock job={{ company: 'Company', years: '2018 - present' }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
              Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse
              non augue.
            </p>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </JobBlock>
          <JobBlock job={{ company: 'Company', years: '2018 - present' }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
              Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse
              non augue.
            </p>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </JobBlock>
        </div>
      </ContentBlock>

      <div className="App-contact">
        <div className="underline"></div>
      </div>
      <LinksBlock
        title="ADDRESS"
        links={[
          { text: 'Imaginary St. 52', ref: '#' },
          { text: 'Vilnius, Narnia', ref: '#' },
        ]}
      ></LinksBlock>
      <LinksBlock
        title="CONTACT"
        links={[
          { text: '+37060000333', ref: 'tel:+37060000333' },
          { text: 'email@test.dev', ref: 'mailto:email@test.dev' },
        ]}
      ></LinksBlock>
      <LinksBlock
        title="SOCIAL"
        links={[
          { text: 'Linkedin/username', ref: '#' },
          { text: 'Twitter/@user-handle', ref: '#' },
        ]}
      ></LinksBlock>
    </div>
  );
}

export default App;
