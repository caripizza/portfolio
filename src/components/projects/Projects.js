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
          <img src={scribble}/>
        </section>


        <section className={styles.right}>
          <article>
            <h3>Homebrewdog</h3>
            <br/>
            <span>
              <a href="https://homebrewdog.herokuapp.com"
                target="_blank" rel="noopener noreferrer"
              >
                https://homebrewdog.herokuapp.com
              </a>
            </span>
            <br/>
            <span>
              RESTful app utilizing the Brewdog Brewery API with Vue for the front-end, PostgreSQL + Express on the back-end, and deployed to Heroku.
            </span>
            <br/>
            <span><Link to="/projects/homebrewdog">View project</Link></span>
          </article>

          <article>
            <h3>Meme Generator</h3>
            <br/>
            <span>
              Ut enim ad minim veniam, @jlakdsf quis nostrud #lkjasfd
            </span>
          </article>

          <article>
            <h3>SssSss</h3>
            <br/>
            <span>
              Duis aute irure dolor in @reprehenderit in voluptate velit esse #cillum #lkjlkjlkj
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
