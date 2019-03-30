import React from 'react';
import styles from './AsyncRM.css';

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
          <p>Featuring...</p>
        </section>
      </main>

    </>
  );
};

export default AsyncRM;
