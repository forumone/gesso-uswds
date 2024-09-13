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
 * Implements hook_library_info_alter().
 */
function guswds_library_info_alter(&$libraries, $extension) {
  // Workaround for JS errors when aggregated. Skipping uswds.es6.js, as there
  // is some issue with drupal processing it (likely related to @uswds/uswds/js/usa-table).
  // Based on https://www.drupal.org/project/gutenberg/issues/3372307.
  foreach ($libraries as $name => &$library) {
    if (empty($library['js'])) {
      continue;
    }

    foreach ($library['js'] as $file => &$properties) {
      if ($file == 'dist/js/uswds.es6.js') {
        $properties['minified'] = TRUE;
        $properties['preprocess'] = FALSE;
      }
    }
  }
}

/**
 * Implements hook_element_info_alter().
 */
function guswds_element_info_alter(array &$types) {
  if (isset($types['gesso_icon_link'])) {
    $types['gesso_icon_link']['#attached']['library'][] = 'gesso/icon_link';
  }
}
