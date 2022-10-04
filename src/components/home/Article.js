import React from 'react';
import PropTypes from 'prop-types';

export default function Article({ children, className }) {
  return (
    <p className={className}>
      {children}
    </p>
  );
}

Article.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
