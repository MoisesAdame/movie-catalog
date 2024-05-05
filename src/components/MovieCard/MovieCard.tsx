import React from 'react'
import { IMovieCard } from './types';
import './MovieCard.css'
import { Pill } from '../Pill'
import genres from '../../constants/genres.json'
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constants';
import { Star } from '@styled-icons/evaicons-solid/Star'
import { IMAGE_SOURCE } from '../../constants/moviesMock';

/**
 * Card that all the important information and the poster of a given movie.
 */
const MovieCard: React.FC<IMovieCard> = ({ title, genreId, posterPath, voteAverage, movieId, showInfo = true }) => {
  // Order of the component.
  // hooks
  // states
  // otras contnates
  // functions
  // useEffects
  // return

  const navigate = useNavigate();

  const getGenreName = (genreId: number) => {
    for(var genre of genres.genres) {
      if (genre.id === genreId) {
        return genre.name;
      }
    }
    return 'Unknown';
  }

  const navigateMovies = (id: number, movieName: string) => {
    navigate(`${ROUTES.SHOW.path}${id}`, { state: { movieName } });
  }

  return (
    <div 
      className='show-box' 
      onClick={() => {
        navigateMovies(movieId, title);
      }}
    >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
      <a href="">
        <div className='movie-card'>
          <div className='movie-card__image-container'>
            <img src={`${IMAGE_SOURCE}${posterPath}`} alt={title} className='movie-card__image'/>
          </div>
          {
            showInfo && 
            <div className='movie-card__data-container'>
              <Pill
                genre={getGenreName(genreId)}
                color='red'
              />
              
              <div>
                <div className='movie-card__title'>
                    {title}
                </div>
                <div className='movie-card__vote-average'>
                  <Star className='movie-card__icon'/> 
                  <span className='movie-card__value'>{voteAverage} / 10</span>
                </div>
              </div>
            </div>
          }
        </div>
      </a>
    </div>
  )
}

export default MovieCard
