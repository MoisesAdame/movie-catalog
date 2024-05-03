import React, { useEffect } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import { getPopularMovies } from '../../services/movies/getPopularMovies';
import { IMovieResponse } from '../../services/movies/types';
import { MovieSlider } from '../../components';

const Popular: React.FC = () => {
  const [movies, setMovies] = React.useState<IMovieResponse[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [errorMovies, setErrorMovies] = React.useState<boolean>(false);

  const getPopular = async () => {
    await getPopularMovies()
      .then((response) => {
        if(response) {
          console.log(response, "response");
          setMovies(response);
        }
      })
      .catch((error) => {
        console.log(error, "error");
        setErrorMovies(true);
      });
    setLoading(false);
  };

  useEffect(() => {
    setLoading(false);
    getPopular();
  }, []);

  return (
    <MainContainer title='Popular'>
      <MovieSlider
        movies={movies}
        title='Popular'
      />
    </MainContainer>
  );
};

export default Popular;
