// nav toggler

const navOpenButton = document.getElementById('nav-toggle-open');
const navCloseButton = document.getElementById('nav-toggle-close');
const navWrapper = document.getElementById('nav-wrapper');

navOpenButton.addEventListener(
    'click',
    () => { navWrapper.classList.remove('top-menu--close')},
    { passive: true }
    );

    navCloseButton.addEventListener(
      'click',
      () => { navWrapper.classList.add('top-menu--close')},
      { passive: true }
    );

    
// back to top
  
const backToTopButton = document.getElementById('back-to-top');

backToTopButton.addEventListener(
  'click',
  () => {window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  },
  { passive: true }
)

const toggleToTop = () => { 
  let y = window.scrollY;
  if ( y >= 150 ) {
    backToTopButton.classList.remove('back-to-top--hidden')
  } else {
    backToTopButton.classList.add('back-to-top--hidden')
  }
}
window.addEventListener( 'scroll', toggleToTop, { passive: true })

// current active menu
// const lastActive = document.querySelectorAll('.active')
// lastActive.length && console.log("__Active: ", lastActive[lastActive.length - 1].textContent)