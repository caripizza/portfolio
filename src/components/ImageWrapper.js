import React, { Component } from 'react';
import PropTypes from 'prop-types';

const transitionIn = `
  @keyframes fadeInSlowly {
    0%   { opacity: 0.25; }
    50%  { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;

export default class ImageWrapper extends Component {
  state = {
    loaded: false
  };

  static propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };

  UNSAFE_componentWillMount() {
    const exists = document.head.querySelectorAll('[data-fadeInSlowly]');

    if(!exists.length) {
      const styleElement = document.createElement('style');
      styleElement.setAttribute('data-fadeInSlowly', 'exists');
      document.head.appendChild(styleElement);
      styleElement.sheet.insertRule(transitionIn, styleElement.sheet.cssRules.length);
    }
  }

  render() {
    const { loaded } = this.state;
    const { width, height, src } = this.props;
    return (
      <>
        {!loaded ?
          <img
            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width%3D'100' height%3D'100' viewBox%3D'0 0 100 100'%2F%3E"
            width={width}
            height={height}
            style={{ backgroundColor: 'transparent' }}
          /> : null}
        <img
          src={src}
          onLoad={() => (this.setState({ loaded: true }))}
          width={width}
          height={height}
          style={{
            animationName: 'fadeInSlowly',
            animationDuration: '0.5s',
            animationIterationCount: 1,
            animationTimingFunction: 'ease-in',
            backgroundColor: 'transparent',
            display: !loaded ? 'none' : undefined,
          }}
        />
      </>
    );
  }
}

