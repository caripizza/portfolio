import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pokedex.css';
import pokedex from '../../../../assets/pokedex/pokedex.png';
import github from '../../../../assets/github.png';

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
          <a href="https://github.com/caripizza/return-of-pokedex"
            target="_blank" rel="noopener noreferrer"
          >
            <img src={github} alt="github" className={styles.github}/>
          </a>
          <p>Featuring animated sort and filter, allowing you to search through 800+ Pokémon characters based on name, type, or speed:</p>
          <img src={pokedex} alt="pokedex" className={styles.screenshots}/>

          <Link to="/projects">Back</Link>
          <br/>

        </section>
      </main>

    </>
  );
};

export default Pokedex;
