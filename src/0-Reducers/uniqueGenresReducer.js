const uniqueGenresReducer = (state = [], action) => {
    switch (action.type) {
        case 'uniqueGenres/change':
            return action.payload
        default:
            return state
    }
}

export default uniqueGenresReducer