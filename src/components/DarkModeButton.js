import React from 'react';
import PropTypes from 'prop-types';

export default function DarkModeButton({ toggleDarkMode, isDarkMode }) {
  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      data-style="toggle-dark-mode"
      style={{
        fontSize: '1.5rem',
        border: 'none',
        cursor: 'pointer',
        borderBottomLeftRadius: '50%',
        borderTopRightRadius: '50%'
      }}
      aria-label={`Toggle ${!isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? '🌒' : '🌞'}
    </button>
  );
}

DarkModeButton.propTypes = {
  toggleDarkMode: PropTypes.func,
  isDarkMode: PropTypes.bool
};
