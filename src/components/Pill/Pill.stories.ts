import type { Meta, StoryObj } from '@storybook/react';
import Pill from './Pill';

const meta = {
  title: 'Pill',
  component: Pill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    genre: 'Science Fiction',
    color: 'red',
  },
};

export const Yellow: Story = {
  args: {
    genre: 'Science Fiction',
    color: 'yellow',
  },
};

export const Green: Story = {
  args: {
    genre: 'Science Fiction',
    color: 'green',
  },
};
