import React from 'react'
import { MovieCard } from '../../components/MovieCard';
import { IMAGE_SOURCE, movies  } from '../../constants/moviesMock';
import MainContainer from '../../components/MainContainer/MainContainer';

const Home = () => {
  return (
    <MainContainer>
      <MovieCard
        title={movies[0].title}
        genreId={movies[0].genre_ids[0]}
        posterPath={IMAGE_SOURCE + movies[0].poster_path}
        voteAverage={movies[0].vote_average}
      />
    </MainContainer>
  );
};

export default Home;
