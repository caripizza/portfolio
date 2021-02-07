import React from 'react';
import styles from './AsyncRM.css';
import rickAndMorty from '../../../../assets/asyncreact/rickAndMorty.png';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { projectsList } from '../projectsData';

const AsyncRM = () => {
  return (
    <ProjectTemplate
      name={projectsList[5].name}
      projectSiteUrl="https://async-rick-and-morty.netlify.com"
      projectGitHub={projectsList[5].githubLink}
      projectStyles={styles.AsyncRM}
      projectDescription={projectsList[5].description}
    >
      <p>Single Page App utilizing CSS grid, featuring pagination with Next and Back buttons:</p>
      <ImageWrapper 
        alt="rick-and-morty-async-react"
        width="auto" height="auto"
        src={rickAndMorty}
      />

    </ProjectTemplate>
  );
};

export default AsyncRM;
