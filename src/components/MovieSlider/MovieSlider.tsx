import React from 'react';
import { MovieCard } from '../MovieCard';
import { IMovieSlider } from './types';
import './movie-slider.css';

const MovieSlider: React.FC<IMovieSlider> = ({ title, movies }) => {
  return (
    <div className='movie-slider__container'>
      <span className='movie-slider__container__title'>
        {title}
      </span>
      <div className='movie-slider__container__slider'>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            genreId={movie.genre_ids[0]}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            movieId={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSlider
