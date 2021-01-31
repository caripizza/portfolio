import React from 'react';
import memePic1 from '../../../../assets/meme-generator/figlet-font1.png';
import memePic2 from '../../../../assets/meme-generator/meme1.png';
import styles from './MemeGenerator.css';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { memeGeneratorDescription } from '../Projects';

const MemeGenerator = () => {
  return (
    <ProjectTemplate
      name="Font & Meme Generator"
      projectSiteUrl="https://caripizza.github.io/meme-generator"
      projectGitHub="https://github.com/caripizza/meme-generator"
      projectStyles={styles.MemeGenerator}
      projectDescription={memeGeneratorDescription}
    >
      <p>Featuring a Figlet font drop-down menu, allowing you to test and download your fonts as image files:</p>
      <ImageWrapper
        alt="meme-pic-1"
        width="auto" height="auto"
        src={memePic1}
      />

      <p>With a meme generator, allowing you to upload or link to images and overlay text in true meme fashion:</p>
      <ImageWrapper
        alt="meme-pic-2"
        width="auto" height="auto"
        src={memePic2}
      />

    </ProjectTemplate>
  );
};

export default MemeGenerator;
