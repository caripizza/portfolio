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
          <p>
            {welcomeMsg}
          </p>
        </section>

        <section className={styles.half}>
          <article className={styles.skills}>
            <h2><strong>Skills</strong></h2>
            <ul>
              <li>Design: UI/UX, Mobile-first principles</li>
              <li>BDD: Selenium, Jenkins, Jasmine</li>
              <li>TDD: Jest, Enzyme, Mocha/Chai, React</li>
              <li>Frameworks: Node, Express, Vue, React, Redux, jQuery, PostCSS, Styled-Components</li>
              <li>Databases: MongoDB, Mongoose, PostgreSQL</li>
              <li>DevTools: DNS, Heroku, Netlify, Git, Slack, Trello, JIRA, Atlassian, GitHub, npm, pip</li>
              <li>Audio/Video: ProTools, Cubase, Logic Pro, Final Cut Pro</li>
              <li>Adobe CC: Photoshop, Illustrator, InDesign, AfterEffects</li>
              <li>CMS: Squarespace, Wordpress</li>
              <li>CDN: Cloudflare/AWS</li>
              <li>Admin: G Suite (Sheets, Docs, Slides, Analytics, Ads)</li>
              <li>SEO: Google Search Console, Ads, Analytics</li>
            </ul>
          </article>
          <article className={styles.languages}>
            <h2><strong>Languages:</strong></h2>
            <ul>
              <li>JavaScript</li>
              <li>HTML/HTML5</li>
              <li>CSS/CSS3</li>
              <li>SQL</li>
              <li>Python</li>
            </ul>
          </article>
        </section>
      </main>

    </>
  );
};

export default Home;
