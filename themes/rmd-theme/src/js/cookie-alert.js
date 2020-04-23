export default (function() {

  const onLoadDelay = 3 // Cookie alert delay
  const rmdCookie = {
    name: 'rmdCookie',
    value: '1', // 1 — analitycs, 2 - analytics + marketing
    maxAge: 180 // days
  };
  const cookieCounter = document.querySelector('#cookie-counter');
  const cookieAlert = document.querySelector('#cookie-alert');
  const cookieAlertBtn = document.querySelector('#cookie-btn');
  
  const rmdCookieExist = document.cookie.split(';').filter(item => item.includes(`${rmdCookie.name}=${rmdCookie.value}`)).length;

  const writeCookie = (name, value,  maxAge = 0) => {
    document.cookie = `${name}=${value}; max-age=${maxAge && 60 * 60 * 24 * maxAge}; path=/;` // secure; samesite"`;
  }

  const setCookieOk = event => {
    cookieAlert.removeAttribute('style');
    writeCookie(rmdCookie.name, rmdCookie.value, rmdCookie.maxAge);    
    console.log("tevent", event)
    event && location.reload()
  }
  
  const showAlert = (delay = 10 ) => {
    console.log(`Cookie alert height ${cookieAlert.offsetHeight} px!`);
    cookieAlert.style.bottom = -2 * cookieAlert.offsetHeight + 'px';
    
    cookieCounter.classList.remove('cookie-counter--hidden')
    let cur = delay;
    const countDown = () => {
      if (cur > 0) {
        cookieCounter.innerHTML = cur;
        setTimeout(countDown, 1000);
      }
      else {
        cookieCounter.classList.add('cookie-counter--hidden')
        cookieAlert.style.bottom = '-1px' // Show cookie alert
      }

      cur--;
    }
  
    setTimeout(countDown, 1000);
  }
  
  if (!rmdCookieExist) {
    cookieAlertBtn.addEventListener('click', setCookieOk, false);
    window.onload = showAlert(onLoadDelay);
  } else {
    setCookieOk();
  }

})();