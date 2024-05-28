import React from 'react';
import { MovieCard } from '../MovieCard';
import { IMovieSlider } from './types';
import './movie-slider.css';

const MovieSlider: React.FC<IMovieSlider> = ({ title, movies, testId }) => {
  return (
    <div className='movie-slider__container' data-testid={testId}>
      { title && (        
        <span className='movie-slider__container__title'>
          {title}
        </span>
      )}
      <div className='movie-slider__container__slider'>
        {movies?.map((movie) => (
          <MovieCard
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
