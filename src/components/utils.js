const getDarkModeIsEnabled = () => document.body.classList.value === 'dark-mode';

function setDarkModeColors() {
  document.body.style.setProperty('--bg-color', 'var(--black-100)');
  document.body.style.setProperty('--text-color', 'var(--white-100)');
}

function setLightModeColors() {
  document.body.style.setProperty('--bg-color', 'var(--white-100)');
  document.body.style.setProperty('--text-color', 'var(--black-100)');
}

function toggleDarkMode(setState, isDarkModeState) {
  setState({ isDarkMode: !isDarkModeState });
}

function toggleTheme() {
  if(getDarkModeIsEnabled()) {
    document.body.classList.toggle('dark-mode');
    setLightModeColors();
  } else  {
    document.body.classList.add('dark-mode');
    setDarkModeColors();
  }
}

export {
  getDarkModeIsEnabled,
  toggleTheme,
  toggleDarkMode,
  setDarkModeColors,
  setLightModeColors
};
