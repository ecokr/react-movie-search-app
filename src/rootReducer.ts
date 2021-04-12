import { combineReducers } from "@reduxjs/toolkit";
import movieArray from './Slices/movieArray';

const reducer = combineReducers({
  movies : movieArray
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;