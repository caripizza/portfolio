import React from 'react';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { projectsList } from '../projectsData';

const Pokedex = () => {
  return (
    <ProjectTemplate
      name={projectsList[7].name}
      projectSiteUrl="https://caripizza.github.io/return-of-pokedex"
      projectGitHub={projectsList[7].githubLink}
      projectDescription={projectsList[7].description}
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
