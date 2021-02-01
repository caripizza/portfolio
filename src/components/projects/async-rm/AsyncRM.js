import React from 'react';
import styles from './AsyncRM.css';
import rickAndMorty from '../../../../assets/asyncreact/rickAndMorty.png';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { asyncRMdescription } from '../Projects';

const AsyncRM = () => {
  return (
    <ProjectTemplate
      name="Async React - Rick & Morty"
      projectSiteUrl="https://async-rick-and-morty.netlify.com"
      projectGitHub="https://github.com/caripizza/async-react"
      projectStyles={styles.AsyncRM}
      projectDescription={asyncRMdescription}
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
