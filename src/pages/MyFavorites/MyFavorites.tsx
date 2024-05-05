import React, { useEffect } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import { useState } from 'react';
import { IMovieDetail } from './types';
import { MovieCard } from '../../components';

const MyFavorites = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<IMovieDetail[]>([]);
  const favorites: string = localStorage.getItem('favorites') || "";

  // const runGetItems = async () => {
  //   if(favorites.length > 0) {
  //     const favoritesArray = JSON.parse(favorites);
  //     const newMovies = await Promise.all(
  //       favoritesArray.map(async (id: string) => {
  //         return getDetails(id)
  //           .then((res) => {
  //             if(res && res) {
  //               return res.data
  //             }
  //           })
  //           .catch((err) => {
  //             console.log(err, "err");
  //          });
  //     }
  //     setMovies(newMovies);
  //   }
  // }

  useEffect(() => {
    setLoading(true);
    //runGetItems();
  }, []);

  return (
    <MainContainer title='My Favorites'>
      <p>
        Hola Mundo
      </p>

      {loading ? (
        <div>
          <h2>
            My Favorites
          </h2>
          {favorites && favorites.length > 0 ? (
            <div>
              {movies && movies.length > 0 ? (
                <div>
                  {movies.map((movie: IMovieDetail) => (
                    <MovieCard 
                      key={movie.id}
                      title={movie.title}
                      genreId={movie.genres[0].id}
                      posterPath={movie.poster_path}
                      voteAverage={movie.vote_average}
                      movieId={movie.id}
                    />
                  ))}
                </div>
              ) :(
                <div>
                  Error fetching movies
                </div>
              )}
            </div>
          ) : (
            <h3>
              Opps, it seems you dont have any favorites.
            </h3>
          )}
        </div>
      ) : (
        <div>
          <h2>
            Loading...
          </h2>
        </div>
      )}
    </MainContainer>
  );
};

export default MyFavorites;
