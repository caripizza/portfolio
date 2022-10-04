import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';
import SideBar from '../sidebar/SideBar';
import DarkModeButton from '../DarkModeButton';
import { toggleTheme } from '../utils';

export default class Header extends Component {
  state = {
    width: window.innerWidth,
    isDarkMode: true, // set dark mode as default
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  handleToggleDarkMode = () => {
    toggleTheme();
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }

  render() {
    const { width, isDarkMode } = this.state;
    const isMobile = width <= 600;

    return (
      <header className={styles.Header}>
        <nav>
          {isMobile ? (
            <SideBar
              isDarkMode={isDarkMode}
              toggleDarkMode={() => this.handleToggleDarkMode()}
              pageWrapId='page-wrap'
            />
          ) : null}
          <h1 id="cari-palazzolo">
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
              <li>
                <DarkModeButton
                  toggleDarkMode={this.handleToggleDarkMode}
                  isDarkMode={isDarkMode}
                />
              </li>
            </ul>
          )}
        </nav>
      </header>
    );
  }
}
