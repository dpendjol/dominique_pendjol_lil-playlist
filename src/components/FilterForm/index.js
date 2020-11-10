import React from 'react'

const FilterForm = ({genres, changeGenreFilter}) => {

    const handleChange = (e) => {
        const id = e.target.id
        const checked = e.target.checked

        changeGenreFilter(id, checked)
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
            <ul>
                {allCheckBoxes}
            </ul>
        </div>
    )
}

export default FilterForm