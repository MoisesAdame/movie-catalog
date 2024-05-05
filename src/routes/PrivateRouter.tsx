import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const PrivateRouter = () => {
  return (
    <>
      <Header/>
      <div className='px-3'>
        <Outlet/>
      </div>
    </>
  );
};

export default PrivateRouter;
