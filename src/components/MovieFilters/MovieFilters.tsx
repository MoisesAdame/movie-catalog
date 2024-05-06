import React, { useState } from 'react';
import { IMovieFilters } from './types';
import './MovieFilters.css';
import classNames from 'classnames';
import { IMovieResponse } from "../../services/movies/types";
import { SortAlphaDown } from '@styled-icons/bootstrap/SortAlphaDown';
import { SortNumericDownAlt } from '@styled-icons/bootstrap/SortNumericDownAlt';

const MovieFilters: React.FC<IMovieFilters> = ({ movies, setterFunction }) => {
  const [sortByTitle, setSortByTitle] = useState<boolean>(false);
  const [sortByVoteAverage, setSortByVoteAverage] = useState<boolean>(false);

  const sortByTitleButtonClasses = classNames('filter-conatiner__button', {
    'filter-conatiner__button--active': sortByTitle,
  });
  const sortByVoteAverageButtonClasses = classNames('filter-conatiner__button', {
    'filter-conatiner__button--active': sortByVoteAverage,
  });

  const sortByAttribute = (arr: IMovieResponse[], attribute: keyof IMovieResponse) =>{
    return arr.sort((a, b) => {
      if (a[attribute] < b[attribute]) {
          return -1;
      }
      if (a[attribute] > b[attribute]) {
          return 1;
      }
      return 0;
    });
  };

  const titleClick = () => {
    setterFunction(sortByAttribute([...movies], 'title'));
    setSortByTitle(!sortByTitle);
    if(sortByVoteAverage) {
      setSortByVoteAverage(!sortByVoteAverage);
    }
  }

  const voteAverageClick = () => {
    setterFunction(sortByAttribute([...movies], 'vote_average'));
    setSortByVoteAverage(!sortByVoteAverage);
    if(sortByTitle) {
      setSortByTitle(!sortByTitle);
    }
  }

  return (
    <div className='filter-conatiner'>
      <button onClick={titleClick} className={sortByTitleButtonClasses}>
        <SortAlphaDown className='filter-conatiner__button__icon' />
        Sort by title
      </button>
      <button onClick={voteAverageClick} className={sortByVoteAverageButtonClasses}>
        <SortNumericDownAlt className='filter-conatiner__button__icon' />
        Sort by vote average
      </button>
    </div>
	);
};

export default MovieFilters;
