// .storybook/main.js
import path from 'path';


/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
  },
  async viteFinal(config) {
    // Imposta una directory di cache unica per questa istanza di Storybook
    config.cacheDir = path.join(__dirname, '../node_modules/.vite-storybook');
    return config;
  },
};

export default config;
