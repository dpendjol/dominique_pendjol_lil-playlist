const filterGenreReducer = (state = 0, action) => {
    switch (action.type) {
        case 'filterGenre':
            return action.payload
        default:
            return state
    }
}

export default filterGenreReducer