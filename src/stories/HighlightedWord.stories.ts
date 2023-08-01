import type { Meta, StoryObj } from '@storybook/react';
import HighlightedWord from '../components/HighlightedWord/HighlightedWord';

const meta = {
  title: 'Components/HighlightedWord',
  component: HighlightedWord,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HighlightedWord>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HighLight: Story = {
  args: {
    text: 'Higlighted text',
    containerClassName: 'flex w-1/2 bg-green-600 p-4',
  },
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
