import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.css';
import scribble from '../../../assets/20_color+doodle-cari-palazzolo.jpg';

const Projects = () => {
  return (
    <>
      <main className={styles.Projects}>

        <section className={styles.left}>
          <h1>Projects</h1>
          <p>I build responsive web experiences, achieving maximum accessibility with a detailed, energetic approach.</p>
          <img src={scribble} alt="scribble"/>
        </section>


        <section className={styles.right}>
          <article>
            <h3>Homebrewdog</h3>
            <br/>
            <span>
              RESTful app utilizing the Brewdog Brewery API with Vue for the front-end, PostgreSQL + Express on the back-end, and deployed to Heroku.
            </span>
            <br/>
            <span>
              <Link to="/projects/homebrewdog">
                View project
              </Link> / 
              <a href="https://github.com/team-thermometer" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </span>
          </article>

          <article>
            <h3>Font & Meme Generator</h3>
            <br/>
            <span>
              WYSIWYG editor made with React which utilizes Figlet fonts, allowing users to download their fonts and meme creations as image files.
            </span>
            <br/>
            <span>
              <Link to="/projects/meme-generator">
                View project
              </Link> / 
              <a href="https://github.com/caripizza/meme-generator" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </span>
          </article>

          <article>
            <h3>SimAlchemy</h3>
            <br/>
            <span>
              Back-end app featuring a code school game for the command line, utilizing MongoDB/Mongoose, Express.js, Node.js, and Inquirer; deployed to Heroku.
            </span>
            <br/>
            <span>
              <Link to="/projects/SimAlchemy">
                View project
              </Link> / 
              <a href="https://github.com/team-sailboat/SimAlchemy" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </span>
          </article>

          <article>
            <h3>Zzzelkj</h3>
            <br/>
            <span>
              Excepteur sint occaecat cupidatat, 90 - 69 qui officia deserunt @asdf #asdfasdf
            </span>
          </article>

          <article>
            <h3>Ulkj78</h3>
            <br/>
            <span>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore jklej oiugj!
            </span>
          </article>
        </section>

      </main>
    </>
  );
};

export default Projects;
