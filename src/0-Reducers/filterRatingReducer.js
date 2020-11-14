const filterRatingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'filterRating/reset':
            return 0;
        case 'filterRating/change':
            return action.payload;
        default:
            return state;
    };
}

export default filterRatingReducer;