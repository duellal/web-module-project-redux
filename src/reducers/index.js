import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteMovieReducer from './favoriteMovieReducer';

const reducers = combineReducers({
   movieReducer: movieReducer,
   favoriteMoviesReducer: favoriteMovieReducer
})

export default reducers;