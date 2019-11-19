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

/**
* Anchor for post content header
**/
var anchorForId = function (id) {
  var anchor = document.createElement("a");
  anchor.className = "header-link";
  anchor.href = "#" + id;
  anchor.innerHTML = '<svg viewBox="0 0 16 10" version="1.1" width="24" height="24"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg>';
  return anchor;
};

var linkifyAnchors = function (level, containingElement) {
  var headers = containingElement.getElementsByTagName("h" + level);
  for (var h = 0; h < headers.length; h++) {
    var header = headers[h];
    header.className = "post-content-header";

    if (typeof header.id !== "undefined" && header.id !== "") {
      // insert header-link before the header
      header.appendChild(anchorForId(header.id));
    }
  }
};

var headerAnchor = function() {
  var contentBlock = document.getElementsByClassName("post-content")[0];
  if (!contentBlock) {
    return;
  }

  for (var level = 1; level <= 4; level++) {
    linkifyAnchors(level, contentBlock);
  }
};


/**
 * footnote tooltip
 */
var fnTooltip = function () {
  $(".footnote-ref").each(function () {
    var id = $(this).children("a").attr("href").substr(1),
      footnote = $(document.getElementById(id)).clone(),
      outer_wrapper = $("<span>", { "class": "fn-content" }),
      inner_wrapper = $("<span>", { "class": "fn-text" });
    footnote.find(".footnote-return").remove();
    $(this).append(outer_wrapper.append(inner_wrapper.html(footnote.html())));
  });

  // fix tooltip position & width
  var position = function () {
    var content = $(".fn-content").removeAttr("style");
    if ($(window).width() < 640)
      content.css("width", $(window).width() / 2);
    else
      content.css("width", 340); // default value
    content.each(function () {
      var width = $(this).children(".fn-text").outerWidth();
      $(this).css({
        "width": width,
        "margin-left": width / -2
      });
    });
  }
  position();
  $(window).resize(position());
}

/**
 * highlight
 */
var highlight = function () {
  document.querySelectorAll('.chroma>table')
    .forEach((element) => {
      const sub = element.querySelector('code[data-lang]');
      if (sub !== null) {
        element.setAttribute('data-lang', mapLang(sub.getAttribute('data-lang')));
      }
    });
}

function mapLang(name) {
  return {
    coffeescript: 'CoffeeScript',
    cpp: 'C++',
    cs: 'C#',
    css: 'CSS',
    html: 'HTML',
    http: 'HTTP',
    js: 'JavaScript',
    json: 'JSON',
    objectivec: 'Objective-C',
    php: 'PHP',
    sql: 'SQL',
    toml: 'TOML',
    ts: 'TypeScript',
    typescript: 'TypeScript',
    xml: 'XML',
    yaml: 'YAML',
  }[name] || name;
}


// /* main */
// $(document).ready(function () {
//   backToTop();
//   mobileNavbar();
//   toc();
//   headerAnchor();
//   fnTooltip();
// });

// highlight();
