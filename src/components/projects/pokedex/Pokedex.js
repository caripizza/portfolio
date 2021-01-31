import React from 'react';
import styles from './Pokedex.css';
import pokedex from '../../../../assets/pokedex/pokedex.png';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { pokedexDescription } from '../Projects';

const Pokedex = () => {
  return (
    <ProjectTemplate
      name="Pokedex"
      projectSiteUrl="https://caripizza.github.io/return-of-pokedex"
      projectGitHub="https://github.com/caripizza/return-of-pokedex"
      projectStyles={styles.Pokedex}
      projectDescription={pokedexDescription}
    >

      <p>Featuring animated sort and filter, allowing you to search through 800+ Pokémon characters based on name, type, or speed:</p>
      <ImageWrapper
        alt="pokedex"
        width="auto" height="auto"
        src={pokedex}
      />

    </ProjectTemplate>
  );
};

export default Pokedex;
