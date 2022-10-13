import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import DarkModeButton from '../DarkModeButton';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '20px',
    right: '36px',
    top: '1.95em'
  },
  bmBurgerBars: {
    background: 'var(--text-color)',
  },
  bmCrossButton: {
    right: '36px',
    top: '1.6em'
  },
  bmCross: {
    background: 'var(--text-color)',
    zoom: '1.5',
    width: '1.5px',
    height: '16px',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'var(--bg-color)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  bmOverlay: {
    background: 'rgba(255, 0, 0, 0.6)'
  }
};

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.isDarkMode = props.isDarkMode;
    this.toggleDarkMode = props.toggleDarkMode.bind(this);
    this.state =  {
      menuOpen: false,
    };
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  componentDidMount() {
    // ensure items are keyboard navigable
    document.body
      .querySelectorAll('.nav-link, .bm-cross-button button')
      .forEach(item => item.tabIndex = 0);
  }

  render() {
    const { isDarkMode, toggleDarkMode } = this.props;

    return (
      <Menu
        styles={styles}
        width='100%'
        isOpen={this.state.menuOpen}
        onStateChange={state => this.setState({ menuOpen: state.isOpen })}
      >
        <Link
          to="/"
          onClick={() => this.closeMenu()}
          className="nav-link"
        >
          Home
        </Link>
        <br />
        <br />
        <Link
          to="/projects"
          onClick={() => this.closeMenu()}
          className="nav-link"
        >
          Projects
        </Link>
        <br />
        <br />
        <a
          className="nav-link"
          href="https://cari.pizza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Art/Music
        </a>
        <br />
        <br />
        <DarkModeButton
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
      </Menu>
    );
  }
}

SideBar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
