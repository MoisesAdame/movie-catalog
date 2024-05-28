import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './routes/router';

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={AppRouter()}/>
    </>
  );
}

export default App;
