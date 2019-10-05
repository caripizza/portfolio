import React, { useState, useEffect } from 'react';
import logo from '../../../assets/caripizza_tr.png';
import styles from './Home.css';
import preloader from '../../../assets/spinnerLoad.gif';

const welcomeMsg1 =
  'Welcome! I\'m Cari, a full stack software developer, musician, and graphic designer.';
const welcomeMsg2 =
  'I started dabbling in freelance website design and digital marketing while performing and teaching music. I later made my way up to the Pacific Northwest, working in technical support and QA testing, where I fell in love with the software development cycle and decided to take the plunge into coding.';
const welcomeMsg3 =
  'In early 2019, I completed a 6 month intensive training program in Full Stack JavaScript. I made this site with React, PostCSS, and Jest, and set-up CI/CD pipelines using Travis CI and Netlify. I\'m a self taught multi-instrumentalist and audio engineer, fierce problem solver and collaborative team player, and I love learning new technologies. I\'m currently exploring AWS, Ruby, Rails, GraphQL and Angular.';

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);
  return (
    <main className={styles.Home}>
      <section className={styles.welcomeSect}>
        <div className={`${styles.imgDiv} ${styles.slide}`}>
          <img src={loading ? preloader : logo} alt="logo" className={`${styles.logo} ${styles.fadeIn} ${styles.slide}`}/>
        </div>
        <p
          className={`${styles.highlight} ${styles.pWelcome1} ${styles.fadeIn}`}
        >
          {welcomeMsg1}
        </p>
        <p
          className={`${styles.highlight} ${styles.welcomeParagraphs} ${
            styles.fadeIn
          }`}
        >
          {welcomeMsg2}
        </p>
        <p
          className={`${styles.highlight} ${styles.welcomeParagraphs} ${
            styles.fadeIn
          }`}
        >
          {welcomeMsg3}
        </p>
      </section>
      <section className={`${styles.half} ${styles.fadeIn}`}>
        {/* <article className={styles.skills}> */}
        <article className={styles.skills}>
          <h2 className={styles.highlight}>Expertise</h2>
          <ul>
            <li>
              <span>JavaScript (ES6+), DOM manipulation</span>
            </li>
            <li>
              <span>UI/UX Mobile-first/Responsive design principles</span>
            </li>
            <li>
              <span>
                BDD/TDD: Selenium, Jenkins, Jasmine, Jest, Enzyme, Mocha/Chai,
                Protractor
              </span>
            </li>
            <li>
              <span>
                Frameworks/Tools: Node.js, Express.js, Vue.js, React, Redux,
                jQuery, AJAX, Axios, Postman, SASS, PostCSS, Styled-Components,
                Material UI, Angular
              </span>
            </li>
            <li>
              <span>
                Database: Google Cloud Platform, Firebase/Firestore, Cloud
                Functions, MongoDB, Mongoose, PostgreSQL, MySQL
              </span>
            </li>
            <li>
              <span>CD/CI: Git, GitHub, Travis CI, Gitlab</span>
            </li>
            <li>
              <span>
                A/V + Design: ProTools, Cubase, Logic Pro, Final Cut Pro, Adobe
                Photoshop, Illustrator, InDesign, AfterEffects
              </span>
            </li>
            <li>
              <span>
                CDN: Squarespace, Wordpress / Ecommerce: Stripe, PayPal,
                American Express, Vantiv, Authorize.Net
              </span>
            </li>
            <li>
              <span>
                Admin/SEO: G Suite, Sheets, Docs, Analytics, Ads, Search
                Console, Facebook Analytics
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
