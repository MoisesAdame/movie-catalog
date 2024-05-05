// import { Genre } from "../../services/movies/types";

export interface IMovieInformation {
  /**
   * Id of the movie.
   */
  movieId: number;
  /**
   * Title of the movie.
   */
  title: string;
  /**
   * A brief description of the movie.
   */
  tagline: string;
  /**
   * Overview of the movie.
   */
  overview: string;
  /**
   * Path of the movie card background image.
   */
  posterPath: string;
  /**
   * Popularity of the movie.
   */
  popularity: number;
  /**
   * Duration in minutes of the movie.
   */
  runtime: number;
  /**
   * Year of release of the movie.
   */
  releaseDate: Date;
  /**
   * Average calification given by the viewers.
   */
  voteAverage: number;
  /**
   * Number of votes given by the viewers.
   */
  voteCount: number;
  /**
   * Genres of the movie.
   */
  genres: Genre[];
  /**
   * Indicates if the movie is a favorite.
   */
  isFavorite: boolean;
  /**
   * Function to add or remove a movie from the favorites.
   */
  favoriteFunction: () => void;
}

export interface Genre {
  id:   number;
  name: string;
}
