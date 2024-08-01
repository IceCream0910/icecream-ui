import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

// Detect dark mode preference
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const preview: Preview = {
  parameters: {
    docs: {
      theme: prefersDarkMode ? themes.dark : themes.normal,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'transparent',
      values: [
        {
          name: 'transparent',
          value: 'transparent',
        },
      ],
    },
  },
};

export default preview;
