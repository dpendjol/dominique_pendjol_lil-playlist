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

export const filterRatingReset = () => {
    return ( {
        type: 'filterRating/reset',
        payload: null
    })
}

export const filterRatingChange = (ratingValue) => {
    return ( {
        type: 'filterRating/change',
        payload: ratingValue
    })
}

export const uniqueGenresChangeAll = (fullList) => {
    return ( {
        type: 'uniqueGenres/changeAll',
        payload: fullList
    })
}

export const uniqueGenresChange = (id, checked) => {
    return ( {
        type: 'uniqueGenres/change',
        payload: {id, checked}
    })
}

export const toggleDisplayMode = () => {
    return ( {
        type: 'displayByGenre/toggle',
        payload: null
    })
}