// Include the USWDS Accordion script.
// This makes the component available globally. If you're only using it on certain pages,
// include it on a template-specific script file instead.
// Be sure to initialize any components as well (see init() function below.)
import domready from 'domready';
import accordion from 'uswds/src/js/components/accordion';
import navigation from 'uswds/src/js/components/navigation';
import banner from 'uswds/src/js/components/banner';
import tooltip from 'uswds/src/js/components/tooltip';
import table from 'uswds/src/js/components/table';

function gessoUswdsNavigation () {
  const subnav = document.querySelectorAll('.c-menu__subnav');
  subnav.forEach((menu, index) => {
    const button = menu.previousElementSibling;
    if (button.classList.contains('usa-nav__link')) {
      const id = `extended-nav-section-${index}`;
      menu.id = id;
      button.setAttribute('aria-controls', id);
    }
  });
  navigation.on(document.body);
}

domready(() => {
  accordion.on(document.body);
  banner.on(document.body);
  tooltip.on(document.body);
  table.on(document.body);
  gessoUswdsNavigation(); // If used with the USWDS accordion component, the navigation must run after it.
  window.uswdsPresent = true;
});


