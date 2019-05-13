import React, {
  useState,
  useEffect
} from 'react';
import logo from '../../../assets/caripizza_tr.png';
import styles from './Home.css';
import preloader from '../../../assets/spinnerLoad.gif';

const welcomeMsg1 = 'Welcome! I\'m Cari, a Full Stack JavaScript developer, musician, and graphic designer.';
const welcomeMsg2 = 'After a decade performing and teaching music, I started dabbling in freelance website design and digital marketing for small businesses. I made my way up to the Pacific Northwest and joined the tech scene as a support agent, later working as a QA tester for a small software company where I fell in love with the software development cycle and decided to take the plunge into coding.';
const welcomeMsg3 = 'In early 2019, I completed a 6 month intensive training program in full stack JavaScript, focusing in front-end website design as well as DevOps, managing the release flow. I made this site with React, styled it with PostCSS, setup continuous integration with Travic CI, and deployed it to Netlify. I\'m a self taught multi-instrumentalist and audio engineer, fierce problem solver and collaborative team player, and I love learning new technologies.';

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  return (
    <>

      <main className={styles.Home}>

        <section className={styles.welcomeSect}>
          <div className={`${styles.imgDiv} ${styles.slide}`}>
            <img src={loading ? preloader : logo} alt="logo" className={styles.fadeIn}/>
            {/* <img src={logo} alt="logo" className={styles.fadeIn}/> */}
          </div>
          <p className={`${styles.highlight} ${styles.pWelcome1}`}>
            {welcomeMsg1}
          </p>
          <p className={styles.welcomeParagraphs}>{welcomeMsg2}</p>
          <p className={styles.welcomeParagraphs}>{welcomeMsg3}</p>
        </section>

        <section className={styles.half}>
          <article className={styles.skills}>
            <h2 className={styles.highlight}><strong>Skills</strong></h2>
            <ul>
              <li><span><strong>Design:</strong> UI/UX, Mobile-first/responsive design principles</span></li>
              <li><span><strong>BDD/TDD:</strong> Selenium, Protractor, Jenkins,  Jasmine, Jest, Enzyme, Mocha/Chai</span></li>
              <li><span><strong>Frameworks/Tools:</strong> Node.js, Express.js, Vue.js, React, Redux, Google Cloud Functions, jQuery, AJAX, SASS, PostCSS, Styled-Components, Material UI</span></li>
              <li><span><strong>Databases:</strong> Firebase/Firestore, MongoDB, Mongoose, PostgreSQL</span></li>
              <li><span><strong>DevTools:</strong> Travis CI, Heroku, Netlify, Git, GitHub, npm, pip, Agile methodologies, Slack, HipChat, Trello, JIRA, Confluence</span></li>
              <li><span><strong>Authentication:</strong> Auth0, Firebase OAuth, Bcrypt, JSON Web Tokens</span></li>
              <li><span><strong>Audio/Video:</strong> ProTools, Cubase, Logic Pro, Final Cut Pro</span></li>
              <li><span><strong>Adobe CC:</strong> Photoshop, Illustrator, InDesign, AfterEffects</span></li>
              <li><span><strong>CMS/CDN:</strong> Squarespace, Wordpress, Cloudflare/AWS</span></li>
              <li><span><strong>Admin/SEO:</strong> G Suite (Email, Sheets, Docs, Slides, Analytics, Ads, Search Console)</span></li>
            </ul>
          </article>

          <article className={styles.education}>
            <h2 className={styles.highlight}>
              <strong>Academic Background</strong>
            </h2>
            <ul>
              <li><span><strong>Advanced Software Development in Full Stack JavaScript:</strong><br/>Alchemy Code Lab (Portland, 2018-2019)</span></li>
              <li className={styles.detail}>
                <span>
                  MERN-stack professional training in vanilla JavaScript (ES6+), DOM manipulation, RESTful APIs, Node.js apps with Express, Vue.js, PostgreSQL, React, Redux, MongoDB, Mongoose
                </span>
                <br/>
              </li>
              <li><br/><span><strong>Bachelor of Fine Arts:</strong><br/>The University of Texas at Austin (2002-2006)</span></li>
              <li className={styles.detail}><span>Major: Studio Art | Concentrations: Video, Drafting, Painting, Printmaking</span></li>
              <li className={styles.detail}><span>Graduated with University Honors</span></li>
            </ul>
          </article>
        </section>

        <section className={styles.languages}>
          <p>JavaScript</p><p>HTML/HTML5</p><p>CSS/CSS3</p><p>SQL</p>
        </section>

      </main>

    </>
  );
};

export default Home;
