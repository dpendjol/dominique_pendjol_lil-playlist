import React from 'react'

const FilterForm = ({genres, changeGenreFilter, changeRatingFilter, filterRating}) => {

    const handleChange = (e) => {
        if (e.target.type === "checkbox") { 
            const id = e.target.id
            const checked = e.target.checked
            changeGenreFilter(id, checked)
        } else {
            const value = e.target.value
            changeRatingFilter(value)
        }
    }

    const allCheckBoxes = genres.map(genre => {
        return (
            <li key={genre.id}>
                <input 
                    id={genre.id} 
                    type="checkbox" 
                    name={genre.genre_name} 
                    checked={genre.value} 
                    onChange={handleChange}
                    />
                <label htmlFor={genre.id}>{genre.genre_name}</label>
            </li>
        )
    })

    return (
        <div className="filter__container">
            <label htmlFor="filter__list"></label>
            <ul id="filter__list">
                {allCheckBoxes}
            </ul>

            <label htmlFor="rating">Filter door rating</label>
            <select id="rating" name="rating" value={filterRating} onChange={handleChange}>
                <option value={0}>--Selecteer--</option>                
                <option value={1}>1 ster</option>    
                <option value={2}>2 sterren</option>    
                <option value={3}>3 sterren</option>    
                <option value={4}>4 sterren</option>                
                <option value={5}>5 sterren</option>     
            </select>
        </div>
    )
}

export default FilterForm