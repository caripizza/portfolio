import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';
import SideBar from '../sidebar/SideBar';

export default class Header extends React.Component {
  state = {
    width: window.innerWidth,
    isDarkMode: false,
  };

  UNSAFE_componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  getDarkMode() {
    if(document.body.classList.value === 'dark-mode') {
      this.setState({ isDarkMode: true });
    } else {
      this.setState({ isDarkMode: false });
    }
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

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
                <button className="dm-toggle" type="button" onClick={() => this.getDarkMode()}
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
