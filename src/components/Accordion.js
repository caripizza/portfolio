import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccordionSection from './AccordionSection';

class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);

    const openSections = {};

    this.props.children.forEach(child => {
      if(child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
  }

  onClick = label => {
    const {
      props: { allowMultipleOpen },
      state: { openSections },
    } = this;

    const isOpen = !!openSections[label];

    if(allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {

      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <div style={{
        // borderTop: '2px solid cyan',
        borderLeft: '2px solid cyan',
        // marginLeft: '1.5em'
      }}>
        {children.map((child, i) => (
          <AccordionSection
            key={i}
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;
