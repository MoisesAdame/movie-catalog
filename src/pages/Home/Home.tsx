import React from 'react';
import { MainContainer, MovieSlider } from '../../components';

const Home = () => {
  return (
    <MainContainer>
      <MovieSlider
      movies={[]}
        title='Popular'
      />
      
    </MainContainer>
  );
};

export default Home;
