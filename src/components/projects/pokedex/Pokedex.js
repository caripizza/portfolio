import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pokedex.css';

const Pokedex = () => {
  return (
    <>

      <main className={styles.Pokedex}>
        <section>
          <h1>Pokedex</h1>
          <span>
            <a href="https://caripizza.github.io/return-of-pokedex/"
              target="_blank" rel="noopener noreferrer"
            >
              https://caripizza.github.io/return-of-pokedex
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

export default Pokedex;
