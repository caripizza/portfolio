import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Homebrewdog.css';
import homebrewPic1 from '../../../../assets/Homebrewdog/search-beers_homebrewdog.png';
import homebrewPic2 from '../../../../assets/Homebrewdog/beer-search-results_homebrewdog.png';
import homebrewPic3 from '../../../../assets/Homebrewdog/beer-detail_homebrewdog.png';
import homebrewPic4 from '../../../../assets/Homebrewdog/profile_homebrewdog.png';
import github from '../../../../assets/github.png';

const Homebrewdog = () => {
  return (
    <main className={styles.Homebrewdog}>
      <section>
        <h1>Homebrewdog</h1>
        <span>
          <a href="https://homebrewdog.herokuapp.com"
            target="_blank" rel="noopener noreferrer"
          >
              https://homebrewdog.herokuapp.com
          </a>
        </span>
        <br/>
        <a href="https://github.com/team-thermometer"
          target="_blank" rel="noopener noreferrer"
        >
          <img src={github} alt="github" className={styles.github}/>
        </a>
        <p>Featuring a pop-up search modal, allowing you to search for beers by key word:</p>
        <img src={homebrewPic1} alt="Homebrewdog-pic1" className={styles.screenshots}/>
        <p>Yielding a list of search results, based on your beer query:</p>
        <img src={homebrewPic2} alt="Homebrewdog-pic2" className={styles.screenshots}/>
        <p>Clicking on a beer from the list directs to the beer detail, where you can rate and save the beer to your Profile:</p>
        <img src={homebrewPic3} alt="Homebrewdog-pic3" className={styles.screenshots}/>
        <p>Your profile displays a list of saved beers, allowing you to post and update comments for each, and even view aggregations based on IBU and ABV:</p>
        <img src={homebrewPic4} alt="Homebrewdog-pic4" className={styles.screenshots}/>

        <Link to="/projects">Back</Link>
        <br/>

      </section>
    </main>
  );
};

export default Homebrewdog;
