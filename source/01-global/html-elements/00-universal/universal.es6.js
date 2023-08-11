import Drupal from 'drupal';
import setScrollbarProperty from '../../../07-utility/_setScrollbarProperty.es6';

Drupal.behaviors.setScrollbarProperty = {
  attach() {
    setScrollbarProperty();
  },
};
