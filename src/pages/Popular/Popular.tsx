import React, { useEffect } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import { getPopularMovies } from '../../services/movies/getPopularMovies';
import { IMovieResponse } from '../../services/movies/types';

const Popular: React.FC = () => {
  const [movies, setMovies] = React.useState<IMovieResponse[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorMovies, setErrorMovies] = React.useState<boolean>(false);

  const getPopular = async () => {
    await getPopularMovies()
      .then((response) => {
        if(response.data) {
          setMovies(response.data.results);
        }
      })
      .catch((error) => {
        console.log(error, "error");
        setErrorMovies(true);
      });
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getPopular();
  }, []);

  return (
    <MainContainer title='Popular'>
      <p>
        Hola Mundo
      </p>
    </MainContainer>
  );
};

export default Popular;
