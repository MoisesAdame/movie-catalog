import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MovieFilters from './MovieFilters';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/MovieFilters',
  component: MovieFilters,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    movies: {
      control: 'object'
    },
    setterFunction: {
      control: 'function'
    },
  },
  args: { 
    movies: [],
    setterFunction: fn() 
  },
} satisfies Meta<typeof MovieFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * MovieFilters component that is in a favorite state.
 */
export const Default: Story = {};
