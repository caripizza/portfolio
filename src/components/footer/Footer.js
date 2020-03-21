import React from 'react';
import styles from './Footer.css';

const copyright = `© ${new Date().getFullYear()} Cari Palazzolo`;
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

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <ul>
        <li>
          <p>
            {copyright} | {linkedinLink} | {aboutLink}
          </p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
