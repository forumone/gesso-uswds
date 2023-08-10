import Drupal from 'drupal';
import once from 'once';

Drupal.behaviors.wysiwyg = {
  attach(context) {
    once('wysiwyg', '[data-wysiwyg]', context).forEach(wysiwyg => {
      // Wrap all tables output via WYSIWYG with a responsive table layout.
      const tables = wysiwyg.querySelectorAll('[data-wysiwyg] table');
      tables.forEach(table => {
        const tableParent = table.parentNode;

        // Don’t add wrapper if it already has one.
        if (
          !tableParent.classList.contains('usa-table-container--scrollable')
        ) {
          const responsiveTable = document.createElement('div');

          responsiveTable.classList.add('usa-table-container--scrollable');
          responsiveTable.setAttribute('tabindex', '0');
          responsiveTable.appendChild(table.cloneNode(true));
          tableParent.replaceChild(responsiveTable, table);
        }
      });
    });
  },
};
