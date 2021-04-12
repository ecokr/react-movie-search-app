import { createSlice } from "@reduxjs/toolkit";

export interface movieItem {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface movieState {
  movies: movieItem,
  loading: boolean,
  errorMessage: string
}

export const movieArray = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    loading: true,
    errorMessage: ''
  },
  reducers: {
    moviesRequested: (state) => {
      return { movies: [], loading: true, errorMessage: '' };
    },
    moviesReceived (state, action){
      if (action.payload.movies) {
        return { movies: action.payload.movies, loading: false, errorMessage: '' };

      }else if(action.payload.error){
        return { movies: [], loading: false, errorMessage: action.payload.error };
      }
    },
  }
});
export const { moviesReceived, moviesRequested } = movieArray.actions;
export default movieArray.reducer;