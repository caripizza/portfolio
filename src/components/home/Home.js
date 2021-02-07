import React, { useState, useEffect } from 'react';
import styles from './Home.css';
import ImageWrapper from '../ImageWrapper';

const welcomeMsg1 =
  'Welcome! I\'m Cari, a full stack software developer, musician, and graphic designer.';
const welcomeMsg2 =
  'I started dabbling in freelance website design and digital marketing while performing and teaching music. I later made my way up to the Pacific Northwest, working in technical support and QA testing, where I fell in love with the software development cycle and decided to take the plunge into coding.';
const welcomeMsg3 =
  'In early 2019, I completed a 6 month intensive training program in Full Stack JavaScript. I made this site with React, PostCSS, and Jest, and set-up CI/CD pipelines using Travis CI and Netlify. I\'m a self taught multi-instrumentalist and audio engineer, fierce problem solver and collaborative team player, and I love learning new technologies. I\'m currently exploring Gemfury, npmjs, AWS, Ruby, Rails, and Angular.';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 400);
    document.title = 'Cari\'s Portfolio: Home';
  }, []);

  return (
    <main className={styles.Home}>
      <section className={styles.welcomeSect} id="home-page">
        <div className={`${styles.imgDiv} ${styles.slide}`}>
          <ImageWrapper 
            alt="logo"
            className={`${styles.fadeIn} ${styles.slide}`} width="100" height="100"
            src={!loading ? 'https://d1el19mzc628gm.cloudfront.net/caripizza_tr.svg' : 'https://d1el19mzc628gm.cloudfront.net/logo-spin.gif'}
          />
        </div>
        <p
          className={`${styles.highlight} ${styles.pWelcome1} ${styles.fadeIn} ${styles.minFont}`}
        >
          {welcomeMsg1}
        </p>
        <p
          className={`${styles.highlight} ${styles.welcomeParagraphs} ${styles.fadeIn} ${styles.minFont}`}
        >
          {welcomeMsg2}
        </p>
        <p
          className={`${styles.highlight} ${styles.welcomeParagraphs} ${styles.fadeIn} ${styles.minFont}`}
        >
          {welcomeMsg3}
        </p>
      </section>
      <section className={`${styles.half} ${styles.fadeIn}`}>
        <article className={styles.skills}>
          <h2 className={styles.highlight}>Expertise</h2>
          <ul className={styles.spreadVertically}>
            <li>
              <span>
                JavaScript, HTML/CSS, DOM manipulation
              </span>
            </li>
            <li>
              <span>
                UI/UX Mobile-first/Responsive design principles
              </span>
            </li>
            <li>
              <span>
                BDD/TDD: Selenium, Jenkins, Jasmine, Jest, Enzyme, Mocha/Chai, Protractor, Rspec, Karma
              </span>
            </li>
            <li>
              <span>
                Frameworks/Tools: Node.js, React/Redux, Babel,
                Webpack, Yarn, Express.js, Vue.js, Postman,
                Serverless, AWS, SASS/SCSS, PostCSS, Styled-Components,
                Material UI, Angular, Auth0
              </span>
            </li>
            <li>
              <span>
                Database: GCP, Firebase/Firestore, Cloud Functions,
                MongoDB, Mongoose, PostgreSQL, MySQL
              </span>
            </li>
            <li>
              <span>
                CD/CI: Git, GitHub, Travis CI, Gitlab, AWS
                CodeStar/CloudFormation, Heroku, Netlify
              </span>
            </li>
            <li>
              <span>
                A/V: ProTools, Cubase, Logic Pro, Final Cut Pro,
                Adobe: Photoshop, Illustrator, InDesign,
                AfterEffects
              </span>
            </li>
            <li>
              <span>
                Squarespace, Wordpress, G Suite, Sheets, Docs,
                Analytics, Ads, GTM, Search Console, Facebook
                Analytics
              </span>
            </li>
          </ul>
        </article>
        <article className={styles.education}>
          <h2 className={styles.highlight}>Education</h2>
          <ul>
            <li>
              <span>
                <strong>
                  Advanced Software Development in Full Stack JavaScript
                </strong>
                <br />
                Alchemy Code Lab (Portland, 2018-2019)
              </span>
            </li>
            <li className={styles.detail}>
              <span>
                MERN-stack professional training in vanilla JavaScript (ES6+),
                DOM manipulation, RESTful APIs, Node.js apps with Express,
                Vue.js, PostgreSQL, React, Redux, MongoDB, Mongoose
              </span>
              <br />
            </li>
            <li>
              <br />
              <span>
                <strong>Bachelor of Fine Arts</strong>
                <br />
                The University of Texas at Austin (2002-2006)
              </span>
            </li>
            <li className={styles.detail}>
              <span>
                Studio Art major with concentrations in Video, Drafting, Painting, and Printmaking
              </span>
            </li>
            <br />
            <li>
              <span>
                <strong>
                  Courses
                </strong>
              </span>
            </li>
            <li className={styles.detail}>
              <span>
                Intro to Website Development
                <br />
                Portland Community College (2015)
              </span>
            </li>
            <li className={styles.detail}>
              <span>
                Seo Strategy & Training
                <br />
                The City of Austin Small Business Development Program (2013)
              </span>
            </li>
          </ul>
        </article>
      </section>
      <section className={styles.languages}>
        <p>JavaScript</p>
        <p>HTML/CSS</p>
        <p>SQL</p>
        <p>Ruby/Rails</p>
      </section>
    </main>
  );
}
