import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          {label}
          <span style={{ float: 'right' }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </span>
        </div>
        {isOpen && (
          <div
            style={{
              background: 'white',
              // border: '2px solid #008f68',
              // marginTop: 10,
              // width: '100%',
              // padding: '1em 0 3em 0',
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
