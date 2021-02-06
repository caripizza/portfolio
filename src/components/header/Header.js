import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';
import SideBar from '../sidebar/SideBar';

export default class Header extends Component {
  state = {
    width: window.innerWidth,
    isDarkMode: false,
    theme: 'light',
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.isDarkMode !== this.state.isDarkMode) {
      this.toggleTheme();
    }
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  setDarkMode() {
    if(!document.body.classList.value) {
      document.body.classList.add('dark-mode');
      this.setState({ theme: 'dark' });
    }
  }

  setLightMode() {
    if(document.body.classList.value === 'dark-mode') {
      document.body.classList.toggle('dark-mode');
      this.setState({ theme: 'light' });
    }
  }

  toggleDarkMode() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }

  toggleTheme() {
    if(this.state.isDarkMode) {
      this.setDarkMode();
    } else {
      this.setLightMode();
    }
  }

  render() {
    const { width, isDarkMode } = this.state;
    const isMobile = width <= 600;
    const dmTogglePic = isDarkMode ? '🌒' : '🌞';

    return (
      <header className={styles.Header}>
        <nav>
          {isMobile ? <SideBar pageWrapId={'page-wrap'} /> : null}
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
                <button className="dm-toggle" type="button" onClick={() => this.toggleDarkMode()}
                  style={{ fontSize: '1.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  {dmTogglePic}
                </button>
              </li>
            </ul>
          )}
        </nav>
      </header>
    );
  }
}
