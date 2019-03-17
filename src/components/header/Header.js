import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';


const Header = () => {
  return (
    <header className={styles.Header}>
      <nav>
        <h1>CARI PALAZZOLO</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
