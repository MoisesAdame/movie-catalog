import React from 'react';
import { Menu } from '@styled-icons/material/Menu';
import './HamburguerButton.css';
import { IHamburguerButton } from './types';

/**
 * A button that displays a hamburguer icon.
 */
const HamburguerButton: React.FC<IHamburguerButton> = ({ onClick }) => {
  return (
    <button className='hamburguer-button' onClick={onClick}>
      <i className='h-full flex items-center'>
        <Menu/>
      </i>
    </button>
  );
};

export default HamburguerButton;
