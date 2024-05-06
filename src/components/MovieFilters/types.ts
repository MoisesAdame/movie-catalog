import { IMovieResponse } from "../../services/movies/types";

export interface IMovieFilters {
  /**
   * List of movies to be filtered
   */
  movies: IMovieResponse[];
  /**
   * Function to set the movies after filtering.
   */
  setterFunction: (movies: IMovieResponse[]) => void;
}
