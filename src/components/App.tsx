import React, { useEffect } from "react";

import '../App.css';
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../rootReducer';
import { movieItem, moviesReceived, moviesRequested } from '../Slices/movieArray'


const MOVIE_API_URL: string = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const App: React.FC<any> = () => {
  const movieArray = useSelector<ReducerType, any>(state => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(MOVIE_API_URL).then(response => {
      dispatch(moviesReceived({ movies: response.data.Search }));
    })
  }, []);

  const search = (searchValue: string) => {
    dispatch(moviesRequested());
    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
      response => {
        if (response.data.Response === "True") {
          dispatch(moviesReceived({ movies: response.data.Search }));
        } else {
          dispatch(moviesReceived({ error: response.data.Error }));
        }
      }
    );
  };

  const retrievedMovies =
    movieArray.loading && !movieArray.errorMessage ? (
      <div className="loader-box _fcc"><div className="loader"></div></div>
    ) : movieArray.errorMessage ? (
      <div className="errorMessage">{movieArray.errorMessage}</div>
    ) : movieArray.movies ? (
      movieArray.movies.map((movie: movieItem, index: string) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    ) : ''

  return (
    <div className="App">
      <div className="m-container">
        <Header text="MOVIE FINDER" />
        <Search search={search} />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">{retrievedMovies}</div>
      </div>
    </div>
  );
}

export default App;
