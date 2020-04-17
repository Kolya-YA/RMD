export default (function() {
  const backToTopButton = document.getElementById('back-to-top');
  const toggleToTop = () => {
    if ( window.scrollY >= 150 ) backToTopButton.classList.remove('back-to-top--hidden')
    else backToTopButton.classList.add('back-to-top--hidden')
  }

  backToTopButton.onclick = () => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  window.addEventListener( 'scroll', toggleToTop, { passive: true })
})();