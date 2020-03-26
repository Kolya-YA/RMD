export default (function() {
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

  })();