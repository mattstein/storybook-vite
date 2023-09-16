import type { StorybookConfig } from "@storybook/html-vite";
import twig from 'vite-plugin-twig-loader'
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        twig()
      ],
    });
  },
};
export default config;
