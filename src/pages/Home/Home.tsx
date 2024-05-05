import { useState, useEffect } from 'react';
import { MovieSlider } from '../../components';
import { getTopRated, getNowPlaying, getPopularMovies } from '../../services';
import { IMovieResponse } from '../../services/movies/types';

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<IMovieResponse[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<IMovieResponse[]>([]);
  const [popularMovies, setPopularMovies] = useState<IMovieResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMovies, setErrorMovies] = useState<boolean>(false);

  const getHomeMovies = async () => {
    const responseTopRated = await getTopRated();
    const responseNowPlaying = await getNowPlaying();
    const responsePopular = await getPopularMovies();

    if(responseTopRated && responseNowPlaying && responsePopular) {
      setTopRatedMovies(responseTopRated);
      setNowPlayingMovies(responseNowPlaying);
      setPopularMovies(responsePopular);
    }else {
      setErrorMovies(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getHomeMovies();
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
          <div>
            <MovieSlider 
              movies={topRatedMovies}
            />
            <MovieSlider 
              movies={nowPlayingMovies}
            />
            <MovieSlider 
              movies={popularMovies}
            />
          </div>
        )
      }
    </>
  );
};

export default Home;
