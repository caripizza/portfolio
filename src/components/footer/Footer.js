import React from 'react';
import styles from './Footer.css';

const Footer = () => {
  const copyright = `© 2019-${new Date().getFullYear()} Cari Palazzolo, all rights reserved`;
  const linkedinLink = (
    <a href="https://linkedin.com/in/cari-palazzolo"
      target="_blank" rel="noopener noreferrer"
    >
      Linkedin
    </a>
  );
  const aboutLink = (
    <a href="https://caripalazzolo.com/about" target="_blank" rel="noopener noreferrer">About</a>
  );
  const github = (
    <a href="https://github.com/caripizza"
      target="_blank" rel="noopener noreferrer"
    >
      Github
    </a>
  );

  return (
    <footer className={styles.Footer}>
      <ul>
        <li>
          {copyright}
        </li>
        <li>
          {github} | {linkedinLink} | {aboutLink}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
