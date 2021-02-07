import React from 'react';
import styles from './SimAlchemy.css';
import simAlchemy from '../../../../assets/SimAlchemy/screenshot.png';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { projectsList } from '../projectsData';

const SimAlchemy = () => {
  return (
    <ProjectTemplate
      name={projectsList[2].name}
      projectSiteUrl="https://sim-alchemy.herokuapp.com"
      projectGitHub={projectsList[2].githubLink}
      projectStyles={styles.SimAlchemy}
      projectDescription={projectsList[2].description}
    >
      <p>Featuring a command line game, where teachers can log in and post up to 5 assignments to try and better their {'cohort\'s'} grades:</p>
      <ImageWrapper 
        alt="sim-alchemy-pic"
        width="auto" height="auto"
        src={simAlchemy}
      />

    </ProjectTemplate>
  );
};

export default SimAlchemy;
