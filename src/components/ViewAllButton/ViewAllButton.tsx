import React from 'react';
import { IViewAllButton } from './types';
import { ArrowIosDownward } from '@styled-icons/evaicons-solid/ArrowIosDownward';
import './ViewAllButton.css';

/**
 * A button that allows the user to view all items
 */
const ViewAllButton:React.FC<IViewAllButton> = ({ onClick }) => {
  return (
    <button className='view-all-button' onClick={onClick}>
      <div className='view-all-button__conatiner'>
        <ArrowIosDownward 
          className='view-all-button__icon'
        />
        <span>
          View All
        </span>
      </div>
    </button>
  );
};

export default ViewAllButton;
