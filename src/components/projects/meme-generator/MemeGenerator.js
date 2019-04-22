import React from 'react';
import { Link } from 'react-router-dom';
import memePic1 from '../../../../assets/meme-generator/figlet-font1.png';
import memePic2 from '../../../../assets/meme-generator/meme1.png';
import github from '../../../../assets/github.png';
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
          <a href="https://github.com/caripizza/meme-generator"
            target="_blank" rel="noopener noreferrer"
          >
            <img src={github} alt="github" className={styles.github}/>
          </a>
          <p>Featuring a Figlet font drop-down menu, allowing you to test and download your fonts as image files:</p>
          <img src={memePic1} alt="Meme-pic1" className={styles.screenshots}/>
          <p>With a meme generator, allowing you to upload or link to images and overlay text in true meme fashion:</p>
          <img src={memePic2} alt="Meme-pic2" className={styles.screenshots}/>

          <Link to="/projects">Back</Link>
          <br/>

        </section>
      </main>

    </>
  );
};

export default MemeGenerator;
