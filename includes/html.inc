<?php

/**
 * @file
 * HTML template functions.
 */

/**
 * Implements hook_preprocess().
 */
function guswds_preprocess(&$variables) {
  if (!empty($variables['directory'])) {
    $variables['gesso_image_path'] = '/' . $variables['directory'] . '/images';
  }
}

/**
 * Implements hook_preprocess_html().
 */
function guswds_preprocess_html(&$vars, $hook) {
  // Add x-ua-compatible meta tag.
  $vars['page']['#attached']['html_head'][] = [
    [
      '#tag' => 'meta',
      '#attributes' => [
        'http-equiv' => 'x-ua-compatible',
        'content' => 'ie=edge',
      ],
    ],
    'x_ua_compatible',
  ];
}
