import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import FavoriteButton from './FavoriteButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/FavoriteButton',
  component: FavoriteButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isFavorite: {
      control: 'boolean'
    },
    onClick: {
      control: 'function'
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof FavoriteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * FavoriteButton component that is in a favorite state.
 */
export const IsFavorite: Story = {
  args: {
    isFavorite: true,
  },
};

/**
 * FavoriteButton component that is in a not favorite state.
 */
export const IsNotFavorite: Story = {
  args: {
    isFavorite: false,
  },
};
