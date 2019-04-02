import React from 'react';
import { Link } from 'react-router-dom';
import memePic1 from '../../../../assets/meme-generator/figlet-font1.png';
import styles from './MemeGenerator.css';

const MemeGenerator = () => {
  return (
    <>

      <main className={styles.MemeGenerator}>
        <section>
          <h1>Font & Meme Generator</h1>
          <span>
            <a href="https://caripizza.github.io/meme-generator/"
              target="_blank" rel="noopener noreferrer"
            >
              https://caripizza.github.io/meme-generator/
            </a>
          </span>
          <br/>
          <p>More details coming soon...</p>
          <img src={memePic1} alt="Meme-pic1"/>

          <Link to="/projects">Back</Link>
          <br/>

        </section>
      </main>

    </>
  );
};

export default MemeGenerator;
