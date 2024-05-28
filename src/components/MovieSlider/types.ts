import { IMovieResponse } from "../../services/movies/types";

export interface IMovieSlider {
  /**
   * Title of the movie slider
   */
  title?: string;
  /**
   * Movies to display
   */
  movies: IMovieResponse[];
  /**
   * Test id for the component
   */
  testId?: string;
};