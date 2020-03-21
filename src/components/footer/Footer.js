import React from 'react';
import styles from './Footer.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <ul>
        <li>
          <p>{`© ${new Date().getFullYear()} Cari Palazzolo`}</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
