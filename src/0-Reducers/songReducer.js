const songReducer = (state = [], action) => {
    switch (action.type) {
        case ('song/add'):
            return [...state, action.payload];
        case('song/delete'):
            return state.filter(song => song._id !== action.payload);
        default:
            return state;
    };
}

export default songReducer;