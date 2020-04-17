export default (function() {

  let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
  
  const setColorScheme = e => {
    if (e.matches) {
      // Dark
      console.log('Dark mode')
    } else {
      // Light
      console.log('Light mode')
    }
  }
  
  setColorScheme(colorSchemeQueryList);
  colorSchemeQueryList.addListener(setColorScheme);
  
})();