import React from 'react';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { getProject } from '../projectsData';
import styles from './Pokedex.css';

const Pokedex = () => {
  const project = getProject('Pokedex');
  return (
    <ProjectTemplate
      name={project.name}
      projectSiteUrl="https://caripizza.github.io/return-of-pokedex"
      projectGitHub={project.githubLink}
      projectDescription={project.description}
      projectStyles={styles.Pokedex}
    >

      <p>Featuring animated sort and filter, allowing you to search through 800+ Pokémon characters based on name, type, or speed:</p>
      <ImageWrapper
        alt="pokedex"
        width="auto" height="auto"
        src="https://d1el19mzc628gm.cloudfront.net/pokedex.png"
      />

    </ProjectTemplate>
  );
};

export default Pokedex;
