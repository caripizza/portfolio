import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './AccordionSection.css';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div style={{
        padding: '.3em',
      }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer' }}
          className={styles.lineGrow}
        >
          {label}
          <span style={{ float: 'right' }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </span>
        </div>
        {isOpen && (
          <div>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
