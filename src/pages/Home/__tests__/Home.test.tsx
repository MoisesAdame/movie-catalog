import React from 'react';
import Home from '../Home';
import { screen, render, waitFor, cleanup } from '@testing-library/react';
import { mockMoviesMoviesResponse } from '../../../services/movies/_mocks_/mocksMovieResults';
import { getNowPlaying, getPopularMovies, getTopRated } from '../../../services';
import { AppContextProvider } from '../../../store/app-context/app-context';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../../services');

afterEach(() => {
  cleanup();
});

describe("Tests for Home page", () => {
  test("The Home page should render correctly", async () => {
    (getPopularMovies as jest.Mock).mockResolvedValue({
      data: {
        mockMoviesMoviesResponse
      }
    });
    (getNowPlaying as jest.Mock).mockResolvedValue({
      data: {
        mockMoviesMoviesResponse
      }
    });
    (getTopRated as jest.Mock).mockResolvedValue({
      data: {
        mockMoviesMoviesResponse
      }
    });

    render(
    <AppContextProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </AppContextProvider>);

    expect(screen.getByTestId('txt-loading')).toHaveTextContent('Loading...');
    expect(screen.getByTestId('txt-loading')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('txt-loading')).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(getPopularMovies).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(getNowPlaying).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(getTopRated).toHaveBeenCalled();
    });

    expect(screen.getByTestId('home-wrapper')).toBeTruthy();
    expect(screen.getByTestId('txt-now-playing')).toHaveTextContent('Now Playing Movies');
    expect(screen.getByTestId('txt-top-rated')).toHaveTextContent('Top Rated Movies');

    expect(screen.getByTestId('now-playing-slider')).toBeInTheDocument();
    expect(screen.getByTestId('now-playing-slider')).toBeInTheDocument();
  });
});