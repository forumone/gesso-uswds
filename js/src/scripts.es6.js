// Custom scripts file
// Include the USWDS Accordion script.
// This makes the component available globally. If you're only using it on certain pages,
// include it on a template-specific script file instead.
// Be sure to initialize any components as well (see init() function below.)
import domready from 'domready';
import 'uswds';
import navigation from './modules/navigation';
import backToTop from './modules/_back-to-top.es6';

(function () {
  'use strict';

  // Generic function that runs on window resize.
  // An empty function is allowed here because it's meant as a placeholder,
  // but you should remove this functionality if you aren't using it!
  // eslint-disable-next-line no-empty-function
  function resizeStuff() {}

  // Runs function once on window resize.
  let timeOut = false;
  window.addEventListener('resize', () => {
    if (timeOut !== false) {
      clearTimeout(timeOut);
    }

    // 200 is time in miliseconds.
    timeOut = setTimeout(resizeStuff, 200);
  });

  // Any scripts you want to initialize once the DOM is ready go here.
  domready(() => {
    navigation(); // If used with the USWDS accordion component, the navigation must run after it.
    backToTop();
  });
})();
