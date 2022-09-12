import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteMovieReducer from './favoriteMovieReducer';

const reducers = combineReducers({
   movies: movieReducer,
   favoriteMovies: favoriteMovieReducer
})

export default reducers;