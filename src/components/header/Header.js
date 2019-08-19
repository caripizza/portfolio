import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';
import SideBar from '../sidebar/SideBar';

export default class Header extends React.Component {
  state = {
    width: window.innerWidth
  };

  UNSAFE_componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 600;

    return (
      <>
        <header className={styles.Header}>
          <nav>
            {isMobile ? <SideBar pageWrapId={'page-wrap'} /> : null}
            <h1>
              <NavLink to="/">CARI PALAZZOLO</NavLink>
            </h1>

            {isMobile ? null : (
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                  <a
                    href="https://cari.pizza"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Art/Music
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </header>
      </>
    );
  }
}
