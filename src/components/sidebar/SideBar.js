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
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    right: '15px'
  },
  bmCross: {
    background: '#bdc3c7',
    zoom: '1.5',
    width: '1px'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    textAlign: 'center'
  },
  bmItem: {
    display: 'inline-flex',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.isDarkMode = props.isDarkMode;
    this.toggleDarkMode = props.toggleDarkMode.bind(this);
    this.toggleTheme = props.toggleTheme.bind(this);
    this.theme = props.theme;
    this.state =  {
      menuOpen: false,
    };
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  componentDidMount() {
    // ensure items are keyboard navigable
    document.body.querySelectorAll('.nav-link').forEach(n => n.setAttribute('tabindex', '0'));
    document.body.querySelectorAll('.bm-cross-button button').forEach(n => n.tabIndex = 0);
  }

  componentDidUpdate(prevProps) {
    const { isDarkMode, toggleTheme } = this.props;
    if(prevProps.isDarkMode !== isDarkMode) {
      toggleTheme(this.setState.bind(this), isDarkMode);
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  render() {
    const { isDarkMode, toggleDarkMode } = this.props;

    return (
      <Menu
        styles={styles}
        width={'50%'}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
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
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};
