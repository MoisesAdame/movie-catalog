export interface IMovieCard {
  /**
   * Title of the movie.
   */
  title: string;
  /**
   * Id of the movie's genre (helps to calculate the genre that goes insithe the Pill).
   */
  genreId: number;
  /**
   * Path of the movie card background image.
   */
  posterPath: string;
  /**
   * Average calification given by the viewers.
   */
  voteAverage: number;
  /**
   * Id of the movie.
   */
  movieId: number;
  /**
   * If true, the movie card will show the information of the movie.
   */
  showInfo?: boolean;
}
