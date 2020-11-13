import React from 'react'

import './FilterForm.css'
import {useDispatch} from 'react-redux'
import {filterRatingChange} from '../../0-Actions'

const FilterForm = ({genres, changeGenreFilter, changeRatingFilter, filterRating}) => {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        if (e.target.type === "checkbox") { 
            const id = e.target.id
            const checked = e.target.checked
            changeGenreFilter(id, checked)
        } else {
            const value = e.target.value
            // changeRatingFilter(value)
            dispatch(filterRatingChange(value))
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
            <label htmlFor="filter__list">Filter lijst door genre</label>
            <ul id="filter__list" className="filter__list">
                {allCheckBoxes}
            </ul>

            <label htmlFor="filter__rating">Filter lijst door rating</label>
            <select id="filter__rating" name="filter__rating" value={filterRating} onChange={handleChange}>
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