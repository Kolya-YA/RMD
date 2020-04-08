export default (function() {

  const onLoadDelay = 5 // Cookie alert delay
  const rmdCookie = 'rmdCookie=1';
  const rmdCookieExpires = 180; // days
  const rmdCookieExist = document.cookie.split(';').filter(item => item.includes(rmdCookie)).length;
  // const rmdCookieExist = false
  const cookieCounter = document.querySelector('#cookie-counter');
  const cookieAlert = document.querySelector('#cookie-alert');
  const cookieAlertBtn = document.querySelector('#cookie-btn');
  
  const rmdCookieString = (maxAge = 0) => {
    // return `"${rmdCookie}; max-age=${maxAge && 60 * 60 * 24 * maxAge}; path=/; secure; samesite"`;
    return `${rmdCookie}; max-age=${maxAge && 60 * 60 * 24 * maxAge}; path=/;`;
  }
  
  const writeCookie = () => {
    document.cookie = rmdCookieString(rmdCookieExpires);
    console.log(`Cookies not exist! — "${rmdCookieString(rmdCookieExpires)}"`);
    cookieAlert.removeAttribute('style')

    console.log(document.cookie.split(';'));
  }  
  
  const showAlert = (delay = 10 ) => {
    console.log(`Cookie alert height ${cookieAlert.offsetHeight} px!`);
    cookieAlert.style.bottom = 0 - (cookieAlert.offsetHeight) + 'px';
    
    cookieCounter.classList.remove('cookie-counter--hidden')
    let cur = delay;
    const countDown = () => {
      if (cur > 0) {
        cookieCounter.innerHTML = cur;
        setTimeout(countDown, 1000);
      }
      else {
        cookieCounter.classList.add('cookie-counter--hidden')
        cookieAlert.style.bottom = '0' // Show cookie alert
      }

      cur--;
    }
  
    setTimeout(countDown, 1000);
  }
  
  cookieAlertBtn.addEventListener('click', writeCookie, false);
  
  if (!rmdCookieExist) {
    window.onload = showAlert(onLoadDelay);
    // console.log(`Cookeies not exist! — "${rmdCookieString(rmdCookieExpires)}"`);
    // document.cookie = rmdCookieString(rmdCookieExpires);
  } else {
    console.log('Cookies exist!')
    console.log(document.cookie.split(';'));
    // document.cookie = rmdCookieString();
    document.cookie = rmdCookieString(rmdCookieExpires);
  }
})();