import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MovieInformation from './MovieInformation';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'Components/MovieInformation',
  component: MovieInformation,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    movieId: { control: 'number' },
    title: { control: 'text' },
    tagline: { control: 'text' },
    posterPath: { control: 'text' },
    overview: { control: 'text' },
    releaseDate: { control: 'date' },
    voteAverage: { control: 'number' },
    voteCount: { control: 'number' },
    genres: { control: 'object' },
    isFavorite: { control: 'boolean' },
    favoriteFunction: { control: 'function' },
  },
} satisfies Meta<typeof MovieInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    movieId: 1,
    title: 'Movie Title',
    tagline: 'Movie Tagline',
    overview: 'Movie Overview',
    posterPath: '8bRIfPGDnmWgdy65LO8xtdcFmFP.jpg',
    popularity: 100.0,
    runtime: 120,
    releaseDate: new Date(),
    voteAverage: 7.5,
    voteCount: 1000,
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Adventure' },
    ],
    isFavorite: false,
    favoriteFunction: fn(),
  },
};
