import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AsyncRM.css';
import rickAndMorty from '../../../../assets/asyncreact/rickAndMorty.png';
import github from '../../../../assets/github.png';

const AsyncRM = () => {
  return (
    <>

      <main className={styles.AsyncRM}>
        <section>
          <h1>Async React - Rick & Morty</h1>
          <span>
            <a href="https://async-rick-and-morty.netlify.com/"
              target="_blank" rel="noopener noreferrer"
            >
              https://async-rick-and-morty.netlify.com
            </a>
          </span>
          <br/>
          <a href="https://github.com/caripizza/async-react"
            target="_blank" rel="noopener noreferrer"
          >
            <img src={github} alt="github" className={styles.github}/>
          </a>
          <p>Single Page App utilizing CSS grid, featuring pagination with Next and Back buttons:</p>
          <img src={rickAndMorty} alt="rick-and-morty-async-react" className={styles.screenshots}/>

          <Link to="/projects">Back</Link>
          <br/>

        </section>
      </main>

    </>
  );
};

export default AsyncRM;
