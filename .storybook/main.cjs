const { loadConfigFromFile, mergeConfig } = require('vite');
const path = require('path');
const preprocess = require('svelte-preprocess');

const config = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-svelte-csf'
  ],
  framework: '@storybook/svelte',
  core: {
    builder: '@storybook/builder-vite'
  },
  svelteOptions: {
    preprocess: [preprocess({ postcss: true })]
  },
  features: {
    // On-demand store does not work for .svelte stories, only CSF.
    // Requires all stories to be loaded in bulk.
    // REFERENCE https://storybook.js.org/docs/svelte/configure/overview#feature-flags
    storyStoreV7: false,
    // use own babel config instead of storybook provided one
    babelModeV7: true
  },
  async viteFinal(config, { configType }) {
    const userConfig = await loadConfigFromFile(
      { command: 'build', mode: process.env.NODE_ENV || 'development' },
      path.resolve(__dirname, '../vite.config.js')
    );
    // return the customized config
    return mergeConfig(config, {
      ...userConfig,
      resolve: {
        alias: {
          $lib: path.resolve(__dirname, '../src/lib'),
          $i18n: path.resolve(__dirname, '../src/i18n'),
          $app: path.resolve(__dirname, './sveltekit-mocks/app/')
        }
      },
      server: {
        hmr: process.env.GITPOD_WORKSPACE_URL
          ? {
            host: process.env.GITPOD_WORKSPACE_URL.replace(
              'https://',
              '6006-'
            ),
            protocol: 'wss',
            clientPort: 443
          }
          : true
      }
    });
  }
};

module.exports = config;
