import mySampleData from '../components/Container/mySampleData';

const songReducer = (state = mySampleData, action) => {
    switch (action.type) {
        case ('song/load'):
            return action.payload
        case ('song/add'):
            return [...state, action.payload];
        case('song/delete'):
            return state.filter(song => song.id !== action.payload);
        default:
            return state;
    };
}

export default songReducer;