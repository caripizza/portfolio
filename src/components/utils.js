const getDarkModeIsEnabled = () => document.body.classList.value === 'dark-mode';

function setDarkMode(setState) {
  if(!getDarkModeIsEnabled()) {
    document.body.classList.add('dark-mode');
    setState({ theme: 'dark' });
  }
}

function setLightMode(setState) {
  if(getDarkModeIsEnabled()) {
    document.body.classList.toggle('dark-mode');
    setState({ theme: 'light' });
  }
}

function toggleDarkMode(setState, isDarkModeState) {
  setState({ isDarkMode: !isDarkModeState });
}

function toggleTheme(setState, isDarkModeState) {
  if(isDarkModeState) {
    setDarkMode(setState);
  } else {
    setLightMode(setState);
  }
}

export {
  getDarkModeIsEnabled,
  toggleTheme,
  toggleDarkMode,
  setDarkMode,
  setLightMode
};
