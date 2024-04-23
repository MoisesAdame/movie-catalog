import React from 'react';
import { IMAGE_SOURCE, movies } from '../../constants/moviesMock';
import { MovieCard } from '../MovieCard';
import { IMovieSlider } from './types';
import './movie-slider.css';

const MovieSlider: React.FC<IMovieSlider> = ({ title }) => {
  return (
    <div className='movie-slider__container'>
      <span className='movie-slider__container__title'>
        {title}
      </span>
      <div className='movie-slider__container__slider'>
        {movies.map((movie, index) => {
          return <MovieCard
                    key={index}
                    title={movie.title}
                    genreId={movie.genre_ids[0]}
                    posterPath={IMAGE_SOURCE + movie.poster_path}
                    voteAverage={movie.vote_average}
                  />
        })}
      </div>
    </div>
  );
};

export default MovieSlider
