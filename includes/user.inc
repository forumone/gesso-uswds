<?php

/**
 * @file
 * User-related hook implementations.
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function guswds_preprocess_user(array &$variables) {
  $variables['display_name'] = $variables['user']->getDisplayName();
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function guswds_theme_suggestions_user_alter(array &$suggestions, array $variables) {
  if (isset($variables['elements']['#view_mode'])) {
    $suggestions[] = 'user__' . $variables['elements']['#view_mode'];
  }
}
