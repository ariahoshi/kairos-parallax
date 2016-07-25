(function () {

  window.IE9 = (platform.name === 'IE' && platform.version === '9.0');

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  NodeList.prototype.on = function (event, listener) {
    this.forEach(function (el) {
      el.addEventListener(event, listener);
    });
  };

  // Initialize Smooth Scroll
  smoothScroll.init({
    updateURL: false
  });

  
  
  var currentSection = 0;
  var sections = document.querySelectorAll('body > section');

  document.querySelector('#slideNav .slideUp').addEventListener('click', function () {
    if (currentSection === 0) {
      return;
    }
    currentSection -= 1;
    smoothScroll.animateScroll('#' + sections[currentSection].getAttribute('id'));
  });

  document.querySelector('#slideNav .slideDown').addEventListener('click', function () {
    if (currentSection === sections.length - 1) {
      return;
    }
    currentSection += 1;
    smoothScroll.animateScroll('#' + sections[currentSection].getAttribute('id'));
  });


  // Delay between animation
  var animationDelay = 400;
  var slideDelay = 600;
  
  var scrollHandler = function () {
    sections.forEach(function (el, i) {
      var sTop = el.getBoundingClientRect().top;
      if (sTop >= -100 && sTop <= 100) {
        // This is the current section
        currentSection = i;
        
        // Check if this section has custom delays
        var aniDel = el.getAttribute('data-animation-delay') || animationDelay;
        var sliDel = el.getAttribute('data-slide-delay') || slideDelay;
        
        setTimeout(function () {

          // Searching for every element with the .to-animate class
          var animateElements = el.querySelectorAll('.to-animate');

          if (animateElements.length > 0) {
            // If there are some elements to animate...
            var animating = 0;

            // ... we will animate them one after the other
            animateElements.forEach(function (aEl, aElIndex) {
              if (!window.IE9) {
                aEl.classList.remove('to-animate');
              } else {
                aEl.className.replace('to-animate', '');
              }

              setTimeout(function () {
                if (!window.IE9) {
                  aEl.classList.add('animating');
                } else {
                  aEl.className += ' animating';
                }
              }, 10 + aniDel * animating);

              animating = animating + 1;
            });

          }
          
        }, sliDel);
      }
    });
  };

  window.addEventListener('scroll', scrollHandler);
  scrollHandler();

})();