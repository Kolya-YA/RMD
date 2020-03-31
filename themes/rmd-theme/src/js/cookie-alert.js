export default (function() {
  const onLoadDelay = 5;
  const cookieCounter = document.querySelector('#cookie-counter');
  // const cookiePanel = document.querySelector('#cookie-panel');
  // const cPanelOkBtn = cookiePanel.querySelector('#cookie-panel-ok');
  // const cPanelCloseBtn = cookiePanel.querySelector('#cookie-panel-close');
  
  const showAlert = (delay = 10 ) => {
    console.log(`Cookie alert in ${delay} sec!`);
    cookieCounter.classList.remove('cookie-counter--hidden')
    let cur = delay;
    const countDown = () => {
      if (cur > 0) {
        console.log('Cur-- :', cur);
        cookieCounter.innerHTML = cur;
        // Show countdown window
        setTimeout(countDown, 1000);
      }
      else {
        // Close coundown window
        cookieCounter.classList.add('cookie-counter--hidden')
        // Show cookie alert
        console.log('Start!', cur);
      }
      cur--;
    }

    setTimeout(countDown, 1000);
  }
  
  window.onload = showAlert(onLoadDelay);

})();