import type { Meta, StoryObj } from '@storybook/react';
import MovieSlider from './MovieSlider';
import { IMAGE_SOURCE, movies } from '../../constants/moviesMock';
import { withRouter } from 'storybook-addon-react-router-v6';


const meta = {
  title: 'Components/MovieSlider',
  component: MovieSlider,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    movies: { control: 'object' },
  },
} satisfies Meta<typeof MovieSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Movie Slider Title',
    movies: [
        {
            adult: movies[0].adult,
            backdrop_path: IMAGE_SOURCE + movies[0].backdrop_path,
            genre_ids: movies[0].genre_ids,
            id: movies[0].id,
            original_language: movies[0].original_language,
            original_title: movies[0].title,
            overview: movies[0].overview,
            popularity: 10,
            poster_path: IMAGE_SOURCE + movies[0].poster_path,
            release_date: new Date(movies[0].release_date),
            title: movies[0].title,
            video: movies[0].video,
            vote_average: movies[0].vote_average,
            vote_count: movies[0].vote_count,
        },
        {
            adult: movies[1].adult,
            backdrop_path: IMAGE_SOURCE + movies[1].backdrop_path,
            genre_ids: movies[1].genre_ids,
            id: movies[1].id,
            original_language: movies[1].original_language,
            original_title: movies[1].title,
            overview: movies[1].overview,
            popularity: 10,
            poster_path: IMAGE_SOURCE + movies[1].poster_path,
            release_date: new Date(movies[0].release_date),
            title: movies[1].title,
            video: movies[1].video,
            vote_average: movies[1].vote_average,
            vote_count: movies[1].vote_count,
        },
        {
            adult: movies[2].adult,
            backdrop_path: IMAGE_SOURCE + movies[2].backdrop_path,
            genre_ids: movies[2].genre_ids,
            id: movies[2].id,
            original_language: movies[2].original_language,
            original_title: movies[2].title,
            overview: movies[2].overview,
            popularity: 10,
            poster_path: IMAGE_SOURCE + movies[2].poster_path,
            release_date: new Date(movies[0].release_date),
            title: movies[2].title,
            video: movies[2].video,
            vote_average: movies[2].vote_average,
            vote_count: movies[2].vote_count,
        },
        {
            adult: movies[3].adult,
            backdrop_path: IMAGE_SOURCE + movies[3].backdrop_path,
            genre_ids: movies[3].genre_ids,
            id: movies[3].id,
            original_language: movies[3].original_language,
            original_title: movies[3].title,
            overview: movies[3].overview,
            popularity: 10,
            poster_path: IMAGE_SOURCE + movies[3].poster_path,
            release_date: new Date(movies[0].release_date),
            title: movies[3].title,
            video: movies[3].video,
            vote_average: movies[3].vote_average,
            vote_count: movies[3].vote_count,
        },
        {
            adult: movies[4].adult,
            backdrop_path: IMAGE_SOURCE + movies[4].backdrop_path,
            genre_ids: movies[4].genre_ids,
            id: movies[4].id,
            original_language: movies[4].original_language,
            original_title: movies[4].title,
            overview: movies[4].overview,
            popularity: 10,
            poster_path: IMAGE_SOURCE + movies[4].poster_path,
            release_date: new Date(movies[0].release_date),
            title: movies[4].title,
            video: movies[4].video,
            vote_average: movies[4].vote_average,
            vote_count: movies[4].vote_count,
        },
        {
            adult: movies[5].adult,
            backdrop_path: IMAGE_SOURCE + movies[5].backdrop_path,
            genre_ids: movies[5].genre_ids,
            id: movies[5].id,
            original_language: movies[5].original_language,
            original_title: movies[5].title,
            overview: movies[5].overview,
            popularity: 10,
            poster_path: IMAGE_SOURCE + movies[5].poster_path,
            release_date: new Date(movies[0].release_date),
            title: movies[5].title,
            video: movies[5].video,
            vote_average: movies[5].vote_average,
            vote_count: movies[5].vote_count,
        }
    ],
  },
};
