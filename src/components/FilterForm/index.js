import React, {useEffect} from 'react';

import './FilterForm.css';
import {useDispatch, useSelector} from 'react-redux';
import {filterRatingChange, 
        filterRatingReset,
        uniqueGenresChange} from '../../0-Actions';

const FilterForm = () => {
    const dispatch = useDispatch();

    const uniqueGenres = useSelector(state => state.uniqueGenres);
    const filterRating = useSelector(state => state.filterRating);
    const songList = useSelector(state => state.songList);

    useEffect( () => {
        dispatch( filterRatingReset() )   
    }, [songList, dispatch]);

    const handleChange = (e) => {
        if (e.target.type === "checkbox") { 
            const id = e.target.id;
            const checked = e.target.checked;
            dispatch( uniqueGenresChange(id, checked) );
        } else {
            const value = e.target.value;
            dispatch(filterRatingChange(value));
        };
    }

    const allCheckBoxes = uniqueGenres.map(genre => {
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
        );
    });

    return (
        <div className="filter__container">
            <label htmlFor="filter__rating">Filter lijst door rating</label>
            <select id="filter__rating" name="filter__rating" value={filterRating} onChange={handleChange}>
                <option value={0}>--Alles weergeven--</option>                
                <option value={1}>1 ster</option>    
                <option value={2}>2 sterren</option>    
                <option value={3}>3 sterren</option>    
                <option value={4}>4 sterren</option>                
                <option value={5}>5 sterren</option>     
            </select>
            
            <label htmlFor="filter__list">Filter lijst door genre</label>
            <ul id="filter__list" className="filter__list">
                {allCheckBoxes}
            </ul>
        </div>
    );
}

export default FilterForm;