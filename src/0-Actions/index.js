export const songAdd = (songObject) => {
    return {
        type: 'song/add',
        payload: songObject
    }
}

export const songDelete = (songId) => {
    return {
        type: 'song/delete',
        payload: songId
    }
}

export const filterGenresNumber = (numOfGenres) => {
    return ( {
        type: 'filterGenre',
        payload: numOfGenres
    } )
}
export const filterRatingChange = (ratingValue) => {
    return ( {
        type: 'filterRating/change',
        payload: ratingValue
    })
}

export const uniqueGenresChange = (newList) => {
    return ( {
        type: 'uniqueGenres/change',
        payload: newList
    })
}

export default {}