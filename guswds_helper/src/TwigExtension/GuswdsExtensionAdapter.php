<?php

namespace Drupal\guswds_helper\TwigExtension;

use Twig_Extension;

/**
 * Load custom twig functions from Pattern Lab.
 */
class GuswdsExtensionAdapter extends Twig_Extension {

  /**
   * GuswdsExtensionAdapter constructor.
   */
  public function __construct() {
    GuswdsExtensionLoader::init();
  }

  /**
   * Get all Twig functions.
   */
  public function getFunctions() {
    return GuswdsExtensionLoader::getFunctions();
  }

  /**
   * Get all Twig filters.
   */
  public function getFilters() {
    return GuswdsExtensionLoader::getFilters();
  }

}
