import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ViewAllButton from './ViewAllButton';

const meta = {
  title: 'Components/ViewAllButton',
  component: ViewAllButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      control: 'function'
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ViewAllButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ViewAllButton component in its default state.
 */
export const Default: Story = {};
