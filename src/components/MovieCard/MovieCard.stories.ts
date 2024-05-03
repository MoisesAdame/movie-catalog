import type { Meta, StoryObj } from '@storybook/react';
import MovieCard from './MovieCard';
import { IMAGE_SOURCE, movies } from '../../constants/moviesMock';

const meta = {
  title: 'MovieCard',
  component: MovieCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MarioBros: Story = {
  args: {
    title: movies[0].title,
    genreId: movies[0].genre_ids[0],
    posterPath: IMAGE_SOURCE + movies[0].poster_path,
    voteAverage: movies[0].vote_average,
    movieId: movies[0].id,
  },
};

export const Other: Story = {
    args: {
      title: movies[1].title,
      genreId: movies[1].genre_ids[0],
      posterPath: IMAGE_SOURCE + movies[1].poster_path,
      voteAverage: movies[1].vote_average,
      movieId: movies[1].id,
    },
  };
