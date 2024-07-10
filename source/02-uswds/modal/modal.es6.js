import modal from '@uswds/uswds/js/usa-modal';
import Drupal from 'drupal';
import once from 'once';

Drupal.behaviors.uswds_modal = {
  attach(context) {
    once('uswds_modal', '.usa-modal', context).forEach(uswdsModal => {
      modal.on(uswdsModal);
    });
  },
};
