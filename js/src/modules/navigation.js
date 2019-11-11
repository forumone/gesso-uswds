import navigation from 'uswds/src/js/components/navigation.js';

export default function() {
  const subnav = document.querySelectorAll('.usa-nav__submenu');
  subnav.forEach((menu, index) => {
    const button = menu.previousElementSibling;
    if (button.classList.contains('usa-accordion__button')) {
      const id = `extended-nav-section-${index}`;
      menu.id = id;
      button.setAttribute('aria-controls', id);
    }
  });
  navigation.on(document.body);
}
