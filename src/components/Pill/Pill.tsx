import React from 'react';
import { IPill } from './types';
import classNames from 'classnames';

/**
 * Card that shows the genre of a given movie.
 */
const Pill: React.FC<IPill> = ({ genre, color }) => {
  const pillClass = classNames({
    'rounded max-w-max p-1 text-white text-xs mb-1': true,
    'bg-red-600': color === 'red',
    'bg-green-600': color === 'green',
    'bg-yellow-600': color === 'yellow',
  })
  
  return (
    <div className={pillClass}>
      {genre}
    </div>
  );
};

export default Pill;
