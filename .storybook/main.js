/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/stories.tsx',
    '../src/**/*.stories.tsx'
  ],
  staticDirs: ['../public'], // <- Static directory for Next.js
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation'
  }
};
export default config;
