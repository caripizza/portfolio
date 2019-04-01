import React from 'react';
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
        </section>
      </main>

    </>
  );
};

export default Pokedex;
