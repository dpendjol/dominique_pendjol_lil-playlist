import {combineReducers} from 'redux'

import songReducer from './songReducer'
import filterGenreReducer from './filterGenreReducer'
import filterRatingReducer from './filterRatingReducer'
import displayByGenreReducer from './displayByGenreReducer'
import uniqueGenresReducer from './uniqueGenresReducer'


const allReducers = combineReducers({
    songList: songReducer,
    filterGenre: filterGenreReducer,
    filterRating: filterRatingReducer,
    displayByGenre: displayByGenreReducer,
    uniqueGenres: uniqueGenresReducer
})

export default allReducers