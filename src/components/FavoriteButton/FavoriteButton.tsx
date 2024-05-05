import React from 'react';
import { IFavoriteButton } from './types';
import { Favorite } from '@styled-icons/material/Favorite';
import { HeartBroken } from '@styled-icons/icomoon/HeartBroken';
import classNames from 'classnames';
import './FavoriteButton.css';

/**
 * FavoriteButton component
 */
const FavoriteButton: React.FC<IFavoriteButton> = ({ isFavorite, onClick }) => {
  const buttonClasses = classNames('favorite-button', {
    'favorite-button--add-favorite': !isFavorite,
    'favorite-button--remove-favorite': isFavorite,
  })

  return (
    <button className={buttonClasses} onClick={onClick}>
      {!isFavorite ? 
      (
        <div className='favorite-button__container'>
          <Favorite className='favorite-button__container__icon'/>
          <span>
            Add to Favorites
          </span>
        </div>
      ) : (
        <div className='favorite-button__container'>
          <HeartBroken className='favorite-button__container__icon'/>
          <span>
            Remove from Favorites
          </span>
        </div>
      )}
    </button>
  );
};

export default FavoriteButton;
