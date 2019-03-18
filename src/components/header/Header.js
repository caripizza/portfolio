import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import SideBar from '../sidebar/SideBar';

export default class Header extends React.Component {
  state = {
    width: window.innerWidth
  };

  componentWillMount() {
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
            <h1>CARI PALAZZOLO</h1>

            {isMobile ? null
              : <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/work">Work</Link></li>
              </ul>
            }

          </nav>
        </header>
      </>
    );
  }
}
