import React from 'react';
import styles from './SimAlchemy.css';
import simAlchemy from '../../../../assets/SimAlchemy/screenshot.png';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { getProject } from '../projectsData';

const SimAlchemy = () => {
  const project = getProject('SimAlchemy');
  return (
    <ProjectTemplate
      name={project.name}
      projectGitHub={project.githubLink}
      projectStyles={styles.SimAlchemy}
      projectDescription={project.description}
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
