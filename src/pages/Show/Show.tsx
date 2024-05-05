import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router';
import { MovieInformation, MovieSlider } from '../../components';
import { IMovieDetail, IMovieResponse } from '../../services/movies/types';
import { getDetails, getRecommendations } from '../../services';


const Show = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string>("");
  const [movieDetail, setMovieDetail] = useState<IMovieDetail>();
  const [recommededMovies, setRecommendedMovies] = useState<IMovieResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMovies, setErrorMovies] = useState<boolean>(false);

  const getMovieDetailsRecommendations = async () => {
    const responseDetails = await getDetails(id ?? "");
    const responseRecommendations = await getRecommendations(id ?? "");
    if(responseDetails && responseDetails.id !== undefined && responseRecommendations && responseRecommendations.results) {
      setMovieDetail(responseDetails);
      setRecommendedMovies(responseRecommendations.results);
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
    getMovieDetailsRecommendations();
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
        <div className='flex flex-col space-y-10'>
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
          <MovieSlider
            title="Recommended Movies"
            movies={recommededMovies}
          />
        </div>
      )}
    </>
  );
};

export default Show;
