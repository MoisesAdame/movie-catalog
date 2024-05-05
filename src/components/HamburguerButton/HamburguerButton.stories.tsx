import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import HamburguerButton from './HamburguerButton';

const meta = {
  title: 'Components/HamburguerButton',
  component: HamburguerButton,
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
} satisfies Meta<typeof HamburguerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * HamburguerButton component in its default state.
 */
export const Default: Story = {};
