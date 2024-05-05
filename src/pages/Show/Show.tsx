import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router';
import { MovieInformation } from '../../components';
import { IMovieDetail } from '../../services/movies/types';
import { getDetails } from '../../services';


const Show = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string>("");
  const [movieDetail, setMovieDetail] = useState<IMovieDetail>();
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMovies, setErrorMovies] = useState<boolean>(false);

  const getMovieDetails = async () => {
  
    const response = await getDetails(id ?? "");
    if(response && response.id !== undefined) {
      setMovieDetail(response);
    }else {
      setErrorMovies(true);
    }
    setLoading(false);
  };

  const addFavorite = () => {
    const favs = favorites.length > 0 ? JSON.parse(favorites) : [];
    const newFavorites = [...favs, id];
    setFavorites(JSON.stringify(newFavorites));
    setIsFavorite(true);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  const removeFavorite = () => {
    const favs = favorites.length > 0 ? JSON.parse(favorites) : [];
    let newFavorites = [...favs];
    newFavorites = newFavorites.filter((e: string) => e !== id);
    setFavorites(JSON.stringify(newFavorites));
    setIsFavorite(false);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  useEffect(() => {
    const favs = localStorage.getItem('favorites') || "";
    setFavorites(favs);
    getMovieDetails();
    if(favs.includes(String (id))) {
      setIsFavorite(true);
    }
  }, []);

  return (
    <>
      {errorMovies ? (
        <div>
          <h1>Movie not found</h1>
        </div>
      ) :
      loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (movieDetail != undefined && 
        <MovieInformation
          movieId={movieDetail.id}
          title={movieDetail.title}
          tagline={movieDetail.tagline}
          overview={movieDetail.overview}
          posterPath={movieDetail.poster_path}
          popularity={movieDetail.popularity}
          runtime={movieDetail.runtime}
          releaseDate={movieDetail.release_date}
          voteAverage={movieDetail.vote_average}
          voteCount={movieDetail.vote_count}
          genres={movieDetail.genres}
          isFavorite={isFavorite}
          favoriteFunction={isFavorite ? removeFavorite : addFavorite}
        />
      )}
    </>
  );
};

export default Show;
