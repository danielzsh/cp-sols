import { within, userEvent } from '@storybook/testing-library';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  argTypes: {
    children: {
      options: ['h1', 'h2', 'h3', 'p', 'all'],
      mapping: {
        h1: <h1>Heading 1</h1>,
        h2: <h2>Heading 2</h2>,
        h3: <h3>Heading 3</h3>,
        p: <p>Paragraph</p>,
        all: <>
          <h1>Heading 1</h1><br />
          <h2>Heading 2</h2><br />
          <h3>Heading 3</h3><br />
          <p>Paragraph</p><br />
        </>
      }
    }
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
