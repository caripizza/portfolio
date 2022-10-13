import React from 'react';
import styles from './Homebrewdog.css';
import homebrewPic1 from '../../../../assets/Homebrewdog/search-beers_homebrewdog.png';
import homebrewPic2 from '../../../../assets/Homebrewdog/beer-search-results_homebrewdog.png';
import homebrewPic3 from '../../../../assets/Homebrewdog/beer-detail_homebrewdog.png';
import homebrewPic4 from '../../../../assets/Homebrewdog/profile_homebrewdog.png';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { projectsList } from '../projectsData';

const Homebrewdog = () => {
  return (
    <ProjectTemplate
      name={projectsList[3].name}
      projectGitHub={projectsList[3].githubLink}
      projectStyles={styles.Homebrewdog}
      projectDescription={projectsList[3].description}
    >
      <p>Featuring a pop-up search modal, allowing you to search for beers by key word:</p>
      <ImageWrapper
        alt="homebrewdog-pic-1"
        width="auto" height="auto"
        src={homebrewPic1}
      />

      <p>Yielding a list of search results, based on your beer query:</p>
      <ImageWrapper
        alt="homebrewdog-pic-2"
        width="auto" height="auto"
        src={homebrewPic2}
      />

      <p>Clicking on a beer from the list directs to the beer detail, where you can rate and save the beer to your Profile:</p>
      <ImageWrapper
        alt="homebrewdog-pic-3"
        width="auto" height="auto"
        src={homebrewPic3}
      />

      <p>Your profile displays a list of saved beers, allowing you to post and update comments for each, and even view aggregations based on IBU and ABV:</p>
      <ImageWrapper
        alt="homebrewdog-pic-4"
        width="auto" height="auto"
        src={homebrewPic4}
      />

    </ProjectTemplate>
  );
};

export default Homebrewdog;
