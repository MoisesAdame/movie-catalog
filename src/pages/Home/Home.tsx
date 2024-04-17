import React from 'react'
import { MovieCard } from '../../components/MovieCard';
import { IMAGE_SOURCE, movies  } from '../../constants/moviesMock';

const Home = () => {
  return (
    <div>
      <MovieCard
        title={movies[0].title}
        genreId={movies[0].genre_ids[0]}
        posterPath={IMAGE_SOURCE + movies[0].poster_path}
        voteAverage={movies[0].vote_average}
      />
    </div>
  );
};

export default Home;
