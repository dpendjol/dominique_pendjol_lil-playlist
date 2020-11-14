import {combineReducers} from 'redux';

import songReducer from './songReducer';
import filterRatingReducer from './filterRatingReducer';
import displayByGenreReducer from './displayByGenreReducer';
import uniqueGenresReducer from './uniqueGenresReducer';


const allReducers = combineReducers({
    songList: songReducer,
    filterRating: filterRatingReducer,
    displayByGenre: displayByGenreReducer,
    uniqueGenres: uniqueGenresReducer
});

export default allReducers;