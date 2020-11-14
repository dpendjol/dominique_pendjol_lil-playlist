const displayByGenreReducer = (state = false, action) => {
    switch (action.type) {
        case 'displayByGenre/toggle':
            return !state;
        default:
            return state;
    };
}

export default displayByGenreReducer;