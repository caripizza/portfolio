import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

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
    outline: 'none'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

export default class SideBar extends React.Component {
  state = {
    menuOpen: false
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <>
        <Menu
          styles={styles}
          width={'50%'}
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <Link
            to="/"
            onClick={() => this.closeMenu()}
          >
            Home
          </Link>
          <br />
          <br />
          <Link
            to="/projects"
            onClick={() => this.closeMenu()}
          >
            Projects
          </Link>
          <br />
          <br />
          <a
            href="https://cari.pizza"
            target="_blank"
            rel="noopener noreferrer"
          >
            Art/Music
          </a>
        </Menu>
      </>
    );
  }
}
