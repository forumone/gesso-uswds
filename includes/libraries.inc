<?php

/**
 * @file
 * Library-related hook implementations.
 */

/**
 * Implements hook_library_info_build().
 */
function guswds_library_info_build() {
  $libraries = [];
  $active_theme = \Drupal::theme()->getActiveTheme()->getPath();
  if (file_exists($active_theme . '/dist/js/common.js')) {
    $libraries['common'] = [
      'js' => [
        'dist/js/common.js' => [],
      ],
    ];
  }
  return $libraries;
}

/**
 * Implements hook_element_info_alter().
 */
function guswds_element_info_alter(array &$types) {
  if (isset($types['gesso_icon_link'])) {
    $types['gesso_icon_link']['#attached']['library'][] = 'gesso/icon_link';
  }
}
