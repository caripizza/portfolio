import React from 'react';
import logo from '../../../assets/caripizza.png';
import styles from './Home.css';

const welcomeMsg1 = `
  Welcome! I'm Cari, a Full Stack JavaScript developer, musician, and graphic designer.
`;
const welcomeMsg2 = `
  After a decade performing and teaching music, I started dabbling in freelance website design and digital marketing for small businesses.
  I made my way up to the Pacific Northwest and joined the tech scene as a support agent, later working as a QA tester for a small software company.
  While testing all weekly releases and pairing with UI/UX to propose new system features, I fell in love with the software development cycle and decided to take the plunge into coding.
`;

const welcomeMsg3 = `
  In early 2019, I completed a 6 month intensive training program in full stack JavaScript, focusing in front-end website design as well as DevOps, managing the release flow.
  I made this site with React and styled it with PostCSS. I'm a self taught multi-instrumentalist and audio engineer, fierce problem solver and collaborative team player, and I love learning new technologies.
`;

const Home = () => {
  return (
    <>

      <main className={styles.Home}>

        <section>
          <img src={logo} alt="logo" className={styles.slide}/>
          <p>{welcomeMsg1}</p>
          <p>{welcomeMsg2}</p>
          <p>{welcomeMsg3}</p>
        </section>


        <section className={styles.half}>
          <article className={styles.skills}>
            <h2><strong>Skills</strong></h2>
            <ul>
              <li><span><strong>Design:</strong> UI/UX, Mobile-first principles</span></li>
              <li><span><strong>BDD:</strong> Selenium, Jenkins, Jasmine</span></li>
              <li><span><strong>TDD:</strong> Jest, Enzyme, Mocha/Chai, React</span></li>
              <li><span><strong>Frameworks:</strong> Node, Express, Vue, React, Redux, jQuery, Sass, PostCSS, Styled-Components</span></li>
              <li><span><strong>Databases:</strong> Firebase/Firestore, MongoDB, Mongoose, PostgreSQL</span></li>
              <li><span><strong>DevTools:</strong> Cloud Functions, Travis CI, DNS, Heroku, Netlify, Git, Slack, Trello, JIRA, Atlassian, GitHub, npm, pip</span></li>
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
              <li><span><strong>Advanced Software Development in Full Stack JavaScript:</strong><br/>Alchemy Code Lab (Portland OR) | 2018-2019</span></li>
              <li className={styles.detail}><span>MERN-stack professional training with emphasis on clean code, team-building, individual problem solving, mob programming + pair programming, and TDD testing</span></li>
              <li className={styles.detail}><span>3 part program with focus on vanilla JavaScript, SPA app development with RESTful APIs, full-stack Node.js apps made with Express, Vue.js, PostgreSQL, React, Redux, MongoDB + Mongoose</span><br/></li>
              <li><br/><span><strong>Bachelor of Fine Arts:</strong><br/>The University of Texas at Austin | 2002-2006</span></li>
              <li className={styles.detail}><span>Major: Studio Art | Concentrations: Video, Drafting, Painting, Printmaking</span></li>
              <li className={styles.detail}><span>Graduated with University Honors, Cum Laude</span></li>
            </ul>
          </article>
        </section>

        <section className={styles.languages}>
          <p>JavaScript</p><p>HTML/HTML5</p><p>CSS/CSS3</p><p>SQL</p><p>Python</p>
        </section>

      </main>

    </>
  );
};

export default Home;
