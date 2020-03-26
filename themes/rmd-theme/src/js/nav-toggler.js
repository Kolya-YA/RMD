export default (function () {
  const navOpenButton = document.getElementById('nav-toggle-open');
  const navCloseButton = document.getElementById('nav-toggle-close');
  const navWrapper = document.getElementById('nav-wrapper');

  navOpenButton.addEventListener(
    'click',
    () => {
      navWrapper.classList.remove('top-menu--close')
    }, {
      passive: true
    }
  );

  navCloseButton.addEventListener(
    'click',
    () => {
      navWrapper.classList.add('top-menu--close')
    }, {
      passive: true
    }
  );
})();