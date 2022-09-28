import React from 'react';
import PropTypes from 'prop-types';

export default function DarkModeButton({ toggleDarkMode, isDarkMode }) {
  return (
    <button type="button" onClick={toggleDarkMode}
      style={{ fontSize: '1.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
    >
      {!isDarkMode ? '🌒' : '🌞'}
    </button>
  );
}

DarkModeButton.propTypes = {
  toggleDarkMode: PropTypes.func,
  isDarkMode: PropTypes.bool
};
