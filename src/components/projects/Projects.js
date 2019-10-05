import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.css';
import hackathonPic from '../../../assets/hackathon.jpg';
import wtfixathonPic from '../../../assets/wtfixathon.jpg';

const Projects = () => {
  return (
    <>
      <main className={styles.Projects}>
        <section className={styles.left}>
          <h1>Projects</h1>
          <p className={styles.description}>
            I love the full stack and thrive in both front-end and back-end
            development. I’m driven to create responsive, accessible websites,
            and improve user experiences through my thoughtful, detailed
            approach.
          </p>

          <div className={styles.imgs}>
            <img src={hackathonPic} alt="hackathon" className={styles.fadeIn} />
            <p className={styles.caption}>
              Speaking at Puppet for the Nike We Code For Good Hackathon, Jan
              2019
            </p>
            <br />
            <img
              src={wtfixathonPic}
              alt="wtfixathon"
              className={styles.fadeIn}
            />
            <p className={styles.caption}>
              Coding at PSU for the TechFestNW + HealthSparq #WTFix-a-thon,{' '}
              <a
                className={styles.twitter}
                href="https://twitter.com/HealthSparq/status/1113864386865651712?ref_src=twsrc%5Etfw"
                target="_blank"
                rel="noopener noreferrer"
              >
                April 2019
              </a>
            </p>
            <ul>
              <strong>Organizations</strong>
              <li>PDXWIT | Portland Women in Tech</li>
              <li>Portland Women Who Code</li>
              <li>PDX Node</li>
              <li>Portland ReactJS</li>
              <li>JavaScript Admirers</li>
            </ul>
          </div>
        </section>

        <section className={styles.right}>
          <article>
            <h3>Q bot</h3>
            <br />
            <span>
              Slack bot and web app for Alchemy Code Lab, made with {'Slack\'s'}{' '}
              Events & Conversations {'API\'s'}, Google Cloud Firestore, Firebase
              OAuth (GitHub + Google), ReactJS, React Hooks, Google Cloud
              Functions, Moment.js, SASS and more.
            </span>
            <br />
            <span>
              <Link to="/projects/q-bot">View project</Link> -
              <a
                href="https://github.com/team-q/q-bot-sandbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </article>

          <article>
            <h3>React + Redux Blog</h3>
            <br />
            <span>
              Written in React/Redux and styled with Styled-Components, this app
              utilizes the JSON placeholder API to generate and filter users,
              posts, and comments.
            </span>
            <br />
            <span>
              <Link to="/projects/redux-blog">View project</Link> -
              <a
                href="https://github.com/caripizza/redux-blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </article>

          <article>
            <h3>SimAlchemy</h3>
            <br />
            <span>
              Back-end app featuring a code school game for the command line,
              utilizing MongoDB/Mongoose, Express.js, Node.js, and Inquirer;
              deployed to Heroku.
            </span>
            <br />
            <span>
              <Link to="/projects/SimAlchemy">View project</Link> -
              <a
                href="https://github.com/team-sailboat/SimAlchemy"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </article>

          <article>
            <h3>Homebrewdog</h3>
            <br />
            <span>
              RESTful web app utilizing the Brewdog Brewery API with VueJS for
              the front-end, PostgreSQL + Express on the back-end, and deployed
              to Heroku.
            </span>
            <br />
            <span>
              <Link to="/projects/homebrewdog">View project</Link> -
              <a
                href="https://github.com/team-thermometer"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </article>

          <article>
            <h3>TCP Chat Room</h3>
            <br />
            <span>
              Back-end chat server allowing multiple clients to connect via the
              command line and chat with each other using short commands (@all,
              @dm, @nick); includes unit tests.
            </span>
            <br />
            <span>
              <Link to="/projects/tcp-chat-room">View project</Link> -
              <a
                href="https://github.com/caripizza/tcp-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </article>

          <article>
            <h3>Async Rick & Morty</h3>
            <br />
            <span>
              SPA made with React + PostCSS, utilizes the Rick & Morty Api to
              fetch and display paginated lists of characters and locations.
            </span>
            <br />
            <span>
              <Link to="/projects/async-rm">View project</Link> -
              <a
                href="https://github.com/caripizza/async-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </article>

          <article>
            <h3>Font & Meme Generator</h3>
            <br />
            <span>
              SPA WYSIWYG editor allowing users to download their fonts and meme
              creations as image files. (React, Node.js, Figlet, Webpack,
              PostCSS, HTML)
            </span>
            <br />
            <span>
              <Link to="/projects/meme-generator">View project</Link> -
              <a
                href="https://github.com/caripizza/meme-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </article>

          <article>
            <h3>Pokedex</h3>
            <br />
            <span>
              Single Page Pokémon search & filter app made with VueJS, HTML, and
              CSS.
            </span>
            <br />
            <span>
              <Link to="/projects/pokedex">View project</Link> -
              <a
                href="https://github.com/caripizza/return-of-pokedex"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </article>
        </section>
      </main>
    </>
  );
};

export default Projects;
