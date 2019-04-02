import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SimAlchemy.css';

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
          <p>More details coming soon...</p>

          <Link to="/projects">Back</Link>
          <br/>

        </section>
      </main>

    </>
  );
};

export default SimAlchemy;
