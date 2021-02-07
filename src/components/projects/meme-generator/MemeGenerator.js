import React from 'react';
import memePic1 from '../../../../assets/meme-generator/figlet-font1.png';
import styles from './MemeGenerator.css';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { projectsList } from '../projectsData';

const MemeGenerator = () => {
  return (
    <ProjectTemplate
      name={projectsList[6].name}
      projectSiteUrl="https://caripizza.github.io/meme-generator"
      projectGitHub={projectsList[6].githubLink}
      projectStyles={styles.MemeGenerator}
      projectDescription={projectsList[6].description}
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
        src="https://d1el19mzc628gm.cloudfront.net/meme1.png"
      />

    </ProjectTemplate>
  );
};

export default MemeGenerator;
