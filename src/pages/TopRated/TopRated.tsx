import React, { useEffect, useState } from 'react';
import { getTopRated } from '../../services/movies/getTopRated';
import { IMovieResponse } from '../../services/movies/types';
import { MovieCard, MovieFilters } from '../../components';

const TopRated: React.FC = () => {
  const [movies, setMovies] = useState<IMovieResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMovies, setErrorMovies] = React.useState<boolean>(false);

  const getTopRatedMovies = async () => {
    const responseTopRated = await getTopRated();
    if(responseTopRated) {
      setMovies(responseTopRated);
    }else {
      setErrorMovies(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [movies]);

  return (
    <>
      {
        loading ? (
          <div>
            Loading...
          </div>
        ) : errorMovies ? (
          <div>
            Error loading movies
          </div>
        ) : (
          <>
            <div className='flex flex-col md:flex-row justify-between mb-5'>
              <h1 className='text-3xl font-bold'>Top Rated Movies</h1>
              <MovieFilters movies={movies} setterFunction={setMovies} />
            </div>
            
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
              {
                movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    genreId={movie.genre_ids[0]}
                    posterPath={movie.poster_path}
                    voteAverage={movie.vote_average}
                    movieId={movie.id}
                  />
                ))
              }
            </div>
          </>
        )
      }
    </>
  );
};

export default TopRated;
