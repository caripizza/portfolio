import React from 'react';
import styles from './Qbot.css';

const Qbot = () => {
  return (
    <>

      <main className={styles.Qbot}>
        <section>
          <h1>Q bot</h1>
          <span>
            <a href="https://qbot.alchemycodelab.io/"
              target="_blank" rel="noopener noreferrer"
            >
              https://qbot.alchemycodelab.io
            </a>
          </span>
          <br/>
          <p>Featuring...</p>
        </section>
      </main>

    </>
  );
};

export default Qbot;
