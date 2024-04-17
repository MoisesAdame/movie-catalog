import React from 'react';
import './main-container.css';
import { IMainContainer } from './types';

const MainContainer: React.FC<IMainContainer> = ({ children, title } ) => {
  return (
    <div className='main-container'>
      <p className='main-container__title'>
        {title}
      </p>
      {children}
    </div>
  );
};

export default MainContainer;
