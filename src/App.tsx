import React from 'react';
import logo from './logo.svg';
import { Pill } from './components/Pill'
import { MovieCard } from './components/MovieCard';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';


const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
