import React from 'react';
import styles from './AsyncRM.css';
import rickAndMorty from '../../../../assets/asyncreact/rickAndMorty.png';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { getProject } from '../projectsData';

const AsyncRM = () => {
  const project = getProject('Async Rick & Morty');
  return (
    <ProjectTemplate
      name={project.name}
      projectSiteUrl="https://async-rick-and-morty.netlify.com"
      projectGitHub={project.githubLink}
      projectStyles={styles.AsyncRM}
      projectDescription={project.description}
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
