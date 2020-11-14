const uniqueGenresReducer = (state = [], action) => {
    switch (action.type) {
        case 'uniqueGenres/changeAll':
            return action.payload
        case 'uniqueGenres/change':
            return (
                state.map(genre => {
                    if (genre.id === action.payload.id) {
                        genre.value = action.payload.checked
                    } 
                return genre
                })
            )
        default:
            return state
    }
}

export default uniqueGenresReducer