import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SimAlchemy.css';
import github from '../../../../assets/github.png';
import simAlchemy from '../../../../assets/SimAlchemy/screenshot.png';

const SimAlchemy = () => {
  return (
    <>

      <main className={styles.SimAlchemy}>
        <section>
          <h1>SimAlchemy</h1>
          <span>
            <a href="https://sim-alchemy.herokuapp.com/"
              target="_blank" rel="noopener noreferrer"
            >
              https://sim-alchemy.herokuapp.com/
            </a>
          </span>
          <br/>
          <a href="https://github.com/team-sailboat/SimAlchemy"
            target="_blank" rel="noopener noreferrer"
          >
            <img src={github} alt="github" className={styles.github}/>
          </a>
          <p>Featuring a command line game, where teachers can log in and post up to 5 assignments to try and better their {'cohort\'s'} grades:</p>
          <img src={simAlchemy} alt="slack-app-logo" className={styles.screenshots}/>

          <Link to="/projects">Back</Link>
          <br/>

        </section>
      </main>

    </>
  );
};

export default SimAlchemy;
