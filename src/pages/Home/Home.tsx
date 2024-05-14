import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MovieSlider, ViewAllButton } from '../../components';
import { getTopRated, getNowPlaying, getPopularMovies } from '../../services';
import { IMovieResponse } from '../../services/movies/types';
import { useAppContext } from '../../store/app-context/app-context';
import './Home.css';

const Home = () => {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();

  console.log(user);

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

  useEffect(() => {
    if(typeof user === 'undefined') {
      const localUser = localStorage.getItem('user');
      if(localUser) {
        setUser(JSON.parse(localUser));
      }
    }
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
          <div className='flex flex-col space-y-5'>
            <div className='home__slider-header'>
              <h1 className='home__slider-header__title'>
                Top Rated Movies
              </h1>
              <ViewAllButton 
                onClick={() => {navigate('/top_rated/view_all')}}
              />
            </div>
            <MovieSlider 
              movies={topRatedMovies}
            />
            <div className='home__slider-header'>
              <h1 className='home__slider-header__title'>
                Now Playing Movies
              </h1>
              <ViewAllButton 
                onClick={() => {navigate('/now_playing/view_all')}}
              />
            </div>
            <MovieSlider 
              movies={nowPlayingMovies}
            />
            <div className='home__slider-header'>
              <h1 className='home__slider-header__title'>
                Popular Movies
              </h1>
              <ViewAllButton 
                onClick={() => {navigate('/popular/view_all')}}
              />
            </div>
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
