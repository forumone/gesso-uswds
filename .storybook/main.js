const { resolve } = require('path');
const path = require('path');

const config = {
  stories: [
    '../source/**/*.stories.mdx',
    '../source/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
  typescript: {
    check: false,
  },
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    '@storybook/addon-a11y',
  ],
  staticDirs: ['../dist'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.twig$/,
      use: [
        {
          loader: 'twig-loader',
          options: {
            twigOptions: {
              namespaces: {
                global: resolve(__dirname, '../', 'source/01-global'),
                uswds: resolve(__dirname, '../', 'source/02-uswds'),
                layouts: resolve(__dirname, '../', 'source/03-layouts'),
                components: resolve(__dirname, '../', 'source/04-components'),
                templates: resolve(__dirname, '../', 'source/05-templates'),
                pages: resolve(__dirname, '../', 'source/06-pages'),
              },
            },
          },
        },
      ],
    });

    config.module.rules.push({
      test: /config\.design-tokens\.yml$/,
      exclude: /node_modules/,
      use: [
        'js-yaml-loader',
        path.resolve(__dirname, '../lib/configLoader.js'),
      ],
    });

    config.module.rules.push({
      test: /\.ya?ml$/,
      exclude: /config\.design-tokens\.yml$/,
      loader: 'js-yaml-loader',
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass-embedded'),
            webpackImporter: false,
            sassOptions: {
              includePaths: [
                path.resolve(__dirname, '../source'),
                path.resolve(
                  __dirname,
                  '../node_modules/@uswds/uswds/packages'
                ),
              ],
            },
          },
        },
      ],
    });

    config.externals = {
      drupal: 'Drupal',
      drupalSettings: 'drupalSettings',
      once: 'once',
    };

    config.resolve.modules.push(path.resolve(__dirname, '../source'));
    config.stats = 'errors-warnings';

    if (configType === 'DEVELOPMENT') {
      config.plugins.push(function readyToGoPlugin() {
        this.hooks.beforeCompile.tap('ReadyToGoPlugin', () => {
          console.log(
            `\n${new Date().toLocaleTimeString('en-US', {
              timeZone: 'America/New_York',
              timeZoneName: 'short',
            })}: Storybook's webpack beginning compilation.`
          );
        });
        this.hooks.afterCompile.tap('ReadyToGoPlugin', () => {
          console.log(
            `\n${new Date().toLocaleTimeString('en-US', {
              timeZone: 'America/New_York',
              timeZoneName: 'short',
            })}: Storybook's compilation complete. Watching for changes.`
          );
        });
      });
    }

    return config;
  },
};
export default config;
