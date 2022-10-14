import React, { useState, useEffect } from 'react';
import styles from './Home.css';
import ImageWrapper from '../ImageWrapper';
import Article from './Article';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 400);
    document.title = 'Cari\'s Portfolio: Home';
    document.head.insertAdjacentHTML(
      'beforeEnd',
      `<link rel="preload" href="https://d1el19mzc628gm.cloudfront.net/caripizza_tr.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="https://d1el19mzc628gm.cloudfront.net/logo-spin.gif" as="image" type="image/gif" />`
    );
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
        <Article
          className={`${styles.highlight} ${styles.pWelcome1} ${styles.fadeIn} ${styles.minFont}`}
        >
          Welcome! I&apos;m Cari, a full stack developer with a career rooted in visual art, graphic design, and music.
        </Article>
        <Article
          className={`${styles.highlight} ${styles.welcomeParagraphs} ${styles.fadeIn} ${styles.minFont}`}
        >
          I started dabbling in freelance website design and digital marketing while performing and teaching music.
          I later made my way up to the Pacific Northwest, working in technical support and QA testing, where I fell in love
          with the software development cycle and decided to take the plunge into coding.
        </Article>
        <Article
          className={`${styles.highlight} ${styles.welcomeParagraphs} ${styles.fadeIn} ${styles.minFont}`}
        >
          In early 2019, I completed a 6 month intensive training program in Full Stack JavaScript.&nbsp;
          <a href="https://github.com/caripizza/portfolio" target="__blank" rel="noopener noreferrer">
            I made this site
          </a>
          &nbsp;with React, PostCSS, and Jest, and set-up CI/CD pipelines using Travis CI and Netlify.
          I&apos;m a self taught multi-instrumentalist and audio engineer, fierce problem solver and collaborative team player, and I love learning new technologies.
        </Article>
        <Article
          className={`${styles.highlight} ${styles.welcomeParagraphs} ${styles.fadeIn} ${styles.minFont}`}
        >
          I&apos;m currently excited about TypeScript, React, and&nbsp;
          <a href="https://github.com/caripizza/ui" target="__blank" rel="noopener noreferrer">
            developing and maintaining
          </a>
          &nbsp;design systems and component libraries.
        </Article>
      </section>
      <section className={`${styles.half} ${styles.fadeIn}`}>
        <article className={styles.skills}>
          <h2 className={styles.highlightLine}>Experience</h2>
          <ul className={styles.spreadVertically}>
            <li>
              <span>
                JavaScript, TypeScript, HTML, CSS, SASS/SCSS, SQL, Python, Ruby/Rails
              </span>
            </li>
            <li>
              <span>
                DOM manipulation, UI/UX Mobile-first/Responsive design principles, A11y best practices,
                Atomic Design, semver
              </span>
            </li>
            <li>
              <span>
                React, Redux, Gatsby, NextJS, VueJS, Express, Angular, GraphQL, StencilJS
              </span>
            </li>
            <li>
              <span>
                SASS/SCSS, PostCSS, Styled-Components, Material UI, TailwindCSS, emotion
              </span>
            </li>
            <li>
              <span>
                Babel, Webpack, Rollup, Gulp, npm, yarn, nvm, rvm, Gemfury, unpkg
              </span>
            </li>
            <li>
              <span>
                Puppeteer, Selenium, Jasmine, Jest, Enzyme, Mocha, Chai, Protractor, Rspec, Karma, Storybook, Chromatic,
                Screener.io, WebdriverIO, Cypress, Browserstack, Jenkins, Postman, Auth0
              </span>
            </li>
            <li>
              <span>
                Google Cloud Platform, Firebase/Firestore/Cloud Functions/Oauth,
                MongoDB, Mongoose, PostgreSQL, MySQL, Heroku
              </span>
            </li>
            <li>
              <span>
                Git, GitHub/Actions, Travis CI, AWS CodeStar/CloudFormation, Netlify, EKS, Kubernetes, Docker
              </span>
            </li>
          </ul>
        </article>
        <article className={styles.education}>
          <h2 className={styles.highlightLine}>Education</h2>
          <ul>
            <li className={styles.detail}>
              <span>
                <strong>
                  Advanced Software Development in Full Stack JavaScript
                </strong>
                <br />
                Alchemy Code Lab (Portland, 2018-2019)
              </span>
            </li>
            <li>
              <span>
                MERN-stack professional training in vanilla JavaScript (ES6+),
                DOM manipulation, RESTful APIs, Node.js apps with Express,
                Vue.js, PostgreSQL, React, Redux, MongoDB, Mongoose
              </span>
              <br />
            </li>
            <br />
            <li className={styles.detail}>
              <span>
                <strong>Bachelor of Fine Arts</strong>
                <br />
                The University of Texas at Austin (2002-2006)
              </span>
            </li>
            <li>
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
        <p>JavaScript/TypeScript</p>
        <p>HTML/CSS/SASS</p>
        <p>SQL/Python</p>
        <p>Ruby/Rails</p>
      </section>
    </main>
  );
}
