import React from 'react';
import logo from '../../../assets/caripizza.png';
import styles from './Home.css';

const welcomeMsg = 'I\'m a full-stack JavaScript developer with passions for debugging, building web apps, tinkering, and learning new technologies. My career is rooted in visual art and graphic design, with fortes in audio engineering, website development, digital marketing, Quality Assurance testing, and Quality Control. I look forward to learning new skills and working with diverse groups on purpose-driven projects.';

const Home = () => {
  return (
    <>

      <main className={styles.Home}>

        <section>
          <img src={logo} alt="logo" className={styles.slide}/>
          <h2><strong>About Me</strong></h2>
          <p>
            {welcomeMsg}
          </p>
        </section>



        <section className={styles.half}>
          <article className={styles.skills}>
            <h2><strong>Skills</strong></h2>
            <ul>
              <li><span><strong>Design:</strong> UI/UX, Mobile-first principles</span></li>
              <li><span><strong>BDD:</strong> Selenium, Jenkins, Jasmine</span></li>
              <li><span><strong>TDD:</strong> Jest, Enzyme, Mocha/Chai, React</span></li>
              <li><span><strong>Frameworks:</strong> Node, Express, Vue, React, Redux, jQuery, PostCSS, Styled-Components</span></li>
              <li><span><strong>Databases:</strong> MongoDB, Mongoose, PostgreSQL</span></li>
              <li><span><strong>DevTools:</strong> DNS, Heroku, Netlify, Git, Slack, Trello, JIRA, Atlassian, GitHub, npm, pip</span></li>
              <li><span><strong>Audio/Video:</strong> ProTools, Cubase, Logic Pro, Final Cut Pro</span></li>
              <li><span><strong>Adobe CC:</strong> Photoshop, Illustrator, InDesign, AfterEffects</span></li>
              <li><span><strong>CMS:</strong> Squarespace, Wordpress</span></li>
              <li><span><strong>CDN:</strong> Cloudflare/AWS</span></li>
              <li><span><strong>Admin:</strong> G Suite (Sheets, Docs, Slides, Analytics, Ads)</span></li>
              <li><span><strong>SEO:</strong> Google Search Console, Ads, Analytics</span></li>
            </ul>
          </article>

          <article className={styles.education}>
            <h2><strong>Academic Background</strong></h2>
            <ul>
              <li><span><strong>Full Stack Software Development + Devsign:</strong><br/>Alchemy Code Lab (Portland OR) | 2018-2019</span></li>
              <li className={styles.detail}><span>MERN-stack professional training with emphasis on clean code, team-building, individual problem solving, mob programming + pair programming, and TDD testing</span></li>
              <li className={styles.detail}><span>3 part program with focus on vanilla JavaScript, SPA app development with RESTful APIs,  full-stack apps using Vue.js with PostgreSQL and React with MongoDB + Mongoose</span><br/></li>
              <li><span><strong>Bachelor of Fine Arts:</strong><br/>The University of Texas at Austin | 2002-2006</span></li>
              <li className={styles.detail}><span>Major: Studio Art | Concentrations: Video, Drafting, Painting, Printmaking</span></li>
              <li className={styles.detail}><span>Graduated with University Honors, Cum Laude</span></li>
            </ul>
          </article>
        </section>

        <section className={styles.languages}>
          {/* <h2><strong>Languages:</strong></h2> */}
          <p>JavaScript</p><p>HTML/HTML5</p><p>CSS/CSS3</p><p>SQL</p><p>Python</p>
          {/* <ul>
            <li><span>JavaScript</span></li>
            <li><span>HTML/HTML5</span></li>
            <li><span>CSS/CSS3</span></li>
            <li><span>SQL</span></li>
            <li><span>Python</span></li>
          </ul> */}
        </section>

      </main>

    </>
  );
};

export default Home;
