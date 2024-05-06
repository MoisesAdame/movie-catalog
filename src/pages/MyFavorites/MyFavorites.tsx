import React, { useEffect } from 'react';
import { useState } from 'react';
import { IMovieDetail } from './types';
import { MovieCard } from '../../components';
import { getDetails } from '../../services';

const MyFavorites = () => {
  const [movies, setMovies] = useState<IMovieDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMovies, setErrorMovies] = React.useState<boolean>(false);
  const favorites: string = localStorage.getItem('favorites') || "";

  const runGetItems = async () => {
    if(favorites.length) {
      const favoritesArray = JSON.parse(favorites);
      const newMovies = await Promise.all(
        favoritesArray.map(async (movieId: string) => {
          const response = await getDetails(movieId);
          if(!response) {
            setErrorMovies(true);
          }else{
            return response;
          }
        })
      );
      setMovies(newMovies);
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    runGetItems();
  }, []);

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
              <h1 className='text-3xl font-bold'>My Favorite Movies</h1>
            </div>
            {
              !movies.length ? (
                <div>
                  No favorites added
                </div>
              ) : (
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                  {
                    movies.map((movie) => (
                      <MovieCard
                        key={movie.id}
                        title={movie.title}
                        genreId={movie.genres[0].id}
                        posterPath={movie.poster_path}
                        voteAverage={movie.vote_average}
                        movieId={movie.id}
                      />
                    ))
                  }
                </div>
              )
            }
          </>
        )
      }
    </>
  );
};

export default MyFavorites;
