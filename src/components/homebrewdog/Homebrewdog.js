import React from 'react';
import homebrewPic1 from '../../../assets/Homebrewdog/search-beers_homebrewdog.png';
import homebrewPic2 from '../../../assets/Homebrewdog/beer-search-results_homebrewdog.png';
import homebrewPic3 from '../../../assets/Homebrewdog/beer-detail_homebrewdog.png';
import homebrewPic4 from '../../../assets/Homebrewdog/profile_homebrewdog.png';

const Homebrewdog = () => {
  const imgStyle = {
    width: '50vw',
    marginBottom: '3em',
    border: '2px solid cyan'
  };

  const pStyle = {
    width: '70vw',
    background: 'gold',
    padding: '1em'
  };

  const hStyle = {
    padding: '.5em 2em 0 .7em',
    fontStyle: 'italic',
    fontWeight: 300
  };

  return (
    <>

      <main>
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backgroundImage: 'repeating-linear-gradient(orange, pink)',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center'
        }}>
          <h1 style={hStyle}>Homebrewdog</h1>
          <p style={pStyle}>Featuring a pop-up search modal, allowing you to search for beers by key word:</p>
          <img src={homebrewPic1} style={imgStyle}/>
          <p style={pStyle}>Yielding a list of search results, based on your beer query:</p>
          <img src={homebrewPic2} style={imgStyle}/>
          <p style={pStyle}>Clicking on a beer from the list directs to the beer detail, where you can rate and save the beer to your Profile:</p>
          <img src={homebrewPic3} style={imgStyle}/>
          <p style={pStyle}>Your profile displays a list of saved beers, allowing you to post and update comments for each, and even view aggregations based on IBU and ABV:</p>
          <img src={homebrewPic4} style={imgStyle}/>
        </section>
      </main>

    </>
  );
};

export default Homebrewdog;
