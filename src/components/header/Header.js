import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';
import SideBar from '../sidebar/SideBar';
import DarkModeButton from '../DarkModeButton';
import { toggleDarkMode, toggleTheme } from '../utils';

export default class Header extends Component {
  state = {
    width: window.innerWidth,
    isDarkMode: true,
    theme: 'dark',
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.isDarkMode !== this.state.isDarkMode) {
      toggleTheme(this.setState.bind(this), this.state.isDarkMode);
    }
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width, isDarkMode, theme } = this.state;
    const isMobile = width <= 600;

    return (
      <header className={styles.Header}>
        <nav>
          {isMobile ? (
            <SideBar
              isDarkMode={isDarkMode}
              toggleDarkMode={() => toggleDarkMode(this.setState.bind(this), isDarkMode)}
              toggleTheme={() => toggleTheme(this.setState.bind(this), isDarkMode)}
              pageWrapId={'page-wrap'}
              theme={theme}
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
                  toggleDarkMode={() => toggleDarkMode(this.setState.bind(this), isDarkMode)}
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
