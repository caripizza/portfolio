import React from 'react';
import styles from './Footer.css';
// import logo from '../../../assets/caripizza.png';

const Footer = () => {
  return (
    <>

      <footer className={styles.Footer}>
        <ul>
          {/* <li>
            <img src={logo} alt="logo"/>
          </li> */}
          <li><p>© 2019 Cari Palazzolo</p></li>
        </ul>
      </footer>

    </>
  );
};

export default Footer;
