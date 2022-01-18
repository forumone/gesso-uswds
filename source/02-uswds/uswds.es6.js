// Include the USWDS Accordion script.
// This makes the component available globally. If you're only using it on certain pages,
// include it on a template-specific script file instead.
// Be sure to initialize any components as well (see init() function below.)
import accordion from 'uswds/src/js/components/accordion';
import navigation from 'uswds/src/js/components/navigation';
import banner from 'uswds/src/js/components/banner';
import tooltip from 'uswds/src/js/components/tooltip';
import table from 'uswds/src/js/components/table';
import Drupal from 'drupal';

function gessoUswdsNavigation (context) {
  const subnav = context.querySelectorAll('.c-menu__subnav');
  subnav.forEach((menu, index) => {
    const button = menu.previousElementSibling;
    if (button.classList.contains('usa-nav__link')) {
      const id = `extended-nav-section-${index}`;
      menu.id = id;
      button.setAttribute('aria-controls', id);
    }
  });
  navigation.on(context === document ? document.body : context);
}

Drupal.behaviors.uswds = {
  attach(context) {
    const initialElem = context === document ? document.body : context;
    accordion.on(initialElem);
    banner.on(initialElem);
    tooltip.on(initialElem);
    table.on(document.body);
    gessoUswdsNavigation(context); // If used with the USWDS accordion component, the navigation must run after it.
    window.uswdsPresent = true;
  }
};


