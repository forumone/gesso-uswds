// // Include the USWDS Accordion script.
// // This makes the component available globally. If you're only using it on certain pages,
// // include it on a template-specific script file instead.
// // Be sure to initialize any components as well (see init() function below.)

// import accordion from '@uswds/uswds/packages/usa-accordion/src';
// import navigation from '@uswds/uswds/packages/usa-header/src';
// import banner from '@uswds/uswds/packages/usa-banner/src';
// import tooltip from '@uswds/uswds/packages/usa-tooltip/src';
// import table from '@uswds/uswds/packages/usa-table/src';

// // import accordion from '@uswds/js/usa-accordion';
// // import navigation from '@uswds/js/usa-header';
// // import banner from '@uswds/js/usa-banner';
// // import tooltip from '@uswds/js/usa-tooltip';
// // import table from '@uswds/js/usa-table';

// // import accordion from "@uswds/uswds/js/usa-accordion";
// // import navigation from '@uswds/uswds/js/usa-header';
// // import banner from '@uswds/uswds/js/usa-banner';
// // import tooltip from '@uswds/uswds/js/usa-tooltip';
// // import table from '@uswds/uswds/js/usa-table';
// import Drupal from 'drupal';

// function gessoUswdsNavigation (context) {
//   const subnav = context.querySelectorAll('.c-menu__subnav');
//   subnav.forEach((menu, index) => {
//     const button = menu.previousElementSibling;
//     if (button.classList.contains('usa-nav__link')) {
//       const id = `extended-nav-section-${index}`;
//       menu.id = id;
//       button.setAttribute('aria-controls', id);
//     }
//   });
//   navigation.on(context === document ? document.body : context);
// }

// Drupal.behaviors.uswds = {
//   attach(context) {
//     const initialElem = context === document ? document.body : context;
//     accordion.on(initialElem);
//     banner.on(initialElem);
//     tooltip.on(initialElem);
//     table.on(document.body);
//     gessoUswdsNavigation(context); // If used with the USWDS accordion component, the navigation must run after it.
//     window.uswdsPresent = true;
//   }
// };


