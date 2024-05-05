import React from 'react';
import { IMovieInformation } from './types';
import { MovieCard, Pill, FavoriteButton } from '../../components';
import { UserGroup } from '@styled-icons/heroicons-solid/UserGroup';
import { Clock } from '@styled-icons/fa-solid/Clock';
import { Calendar } from '@styled-icons/fa-solid/Calendar';
import { Star } from '@styled-icons/evaicons-solid/Star'
import { BarChartSquare } from '@styled-icons/boxicons-solid/BarChartSquare'
import './MovieInformation.css';

const MovieInformation: React.FC<IMovieInformation> = ({ 
  movieId,
  title,
  tagline,
  overview,
  posterPath,
  popularity,
  runtime,
  releaseDate,
  voteAverage,
  voteCount,
  genres,
  isFavorite,
  favoriteFunction
 }) => {
  return (
    <div className='movie-information'>
      <div className='movie-information__movie-card'>
        <MovieCard
          title={title}
          genreId={genres && genres[0].id}
          posterPath={posterPath}
          voteAverage={voteAverage}
          movieId={movieId}
          showInfo={false}
        />
      </div>
      <div className='movie-information__information-conatiner'>
        <h2 className='movie-information__information-conatiner__title'>
          {title}
        </h2>
        <div className='movie-information__information-conatiner__stats-container'>
          <div className='movie-information__information-conatiner__stats-container__item'>
            <UserGroup className='movie-information__information-conatiner__stats-container__item__icon'/>
            <span>
              18-
            </span>
          </div>
          <div className='movie-information__information-conatiner__stats-container__item'>
            <Clock className='movie-information__information-conatiner__stats-container__item__icon'/>
            <span>
              {runtime} min.
            </span>
          </div>
          <div className='movie-information__information-conatiner__stats-container__item'>
            <Calendar className='movie-information__information-conatiner__stats-container__item__icon'/>
            <span>
              {releaseDate && releaseDate.toString()}
            </span>
          </div>
          <div className='movie-information__information-conatiner__stats-container__item'>
            <Star className='movie-information__information-conatiner__stats-container__item__icon'/>
            <span>
              {voteAverage}
            </span>
          </div>
          <div className='movie-information__information-conatiner__stats-container__item'>
            <BarChartSquare className='movie-information__information-conatiner__stats-container__item__icon'/>
            <span>
              {voteCount}
            </span>
          </div>
        </div>
        <div className='movie-information__information-conatiner__description-container'>
          { tagline !== '' &&
            <p>
              "{tagline}"
            </p>
          }
          <p>
            {overview}
          </p>
        </div>
        <div className='movie-information__information-conatiner__section-conatiner'>
          <div className='movie-information__information-conatiner__section-conatiner__item'>
            <h3 className='movie-information__information-conatiner__section-conatiner__item__title'>
              Genres
            </h3>
            <div className='movie-information__information-conatiner__section-conatiner__item__contents'>
              {genres && genres.map((genre: { id: React.Key | null | undefined; name: string; }) => (
                <Pill
                  key={genre.id}
                  genre={genre.name}
                  color='green'
                />
              ))}
            </div>
          </div>
          <div className='movie-information__information-conatiner__section-conatiner__item'>
            <h3 className='movie-information__information-conatiner__section-conatiner__item__title'>
              Favorite
            </h3>
            <FavoriteButton
              isFavorite={isFavorite}
              onClick={favoriteFunction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInformation;
