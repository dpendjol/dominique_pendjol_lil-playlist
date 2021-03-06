import React from 'react';
import {useEffect} from 'react';
import {v4 as uuid} from 'uuid';

import './container.css';

import SongList from '../SongList';
import InputForm from '../InputForm';
import FilterForm from '../FilterForm';
import Message from '../Message';

import {useSelector, useDispatch} from 'react-redux';
import { uniqueGenresChangeAll } from '../../0-Actions';

const Container = () => {
    const dispatch = useDispatch()

    /**
     * Set all states
     */
    const songList = useSelector(state => state.songList);
    const filterRating = useSelector(state => state.filterRating);
    const displayByGenre = useSelector(state => state.displayByGenre);
    const uniqueGenresList = useSelector(state => state.uniqueGenres);
    
    /**
     * Every time the state of the songList changes we have to check if there is no other
     */
    useEffect(() => {
        const arrObjGenres = [];
        getUniqueGenres(songList)
            .forEach(genre => {
                arrObjGenres.push({id: uuid(), genre_name: genre, value: false});
            });

        // Dispatch the change
        dispatch( uniqueGenresChangeAll(arrObjGenres) );
    },[songList, dispatch]);
    
    // CATEGORISEREN
    /**
     * Get a list of all genres, one entry per genre
     * @param {Array} listOfSongs 
     */
    const getUniqueGenres = (listOfSongs) => {
        return listOfSongs
            .map(song => song.genre)
            .reduce((genres, currentValue) => {
                return genres.includes(currentValue) ? genres : [...genres, currentValue];
            }, [])
            .sort();
    }

    /**
     * Group the song object by genre. Return them in an array.
     * @param {Array} uniqueGenres list of all genres, one entry per genre
     * @param {Array} songList list of all songs consists of objects
     */
    const getSongsByGenre = (uniqueGenres, songList) => {
        let array = [];
        uniqueGenres.forEach(genre => {
            array.push({
                genre_name: genre, 
                song: songList.filter(song =>
                    song.genre.toLowerCase() === genre.toLowerCase())});
        });
        return array;
    }

    /**
     * Render the songlist to be displayed on the screen
     */
    const displaySongList = () => {
 
        let displaySongs = [...songList];
            
        if (uniqueGenresList
            .map(genre => genre.value)
            .includes(true)) {
            const compGenre = uniqueGenresList.reduce((trueValues, genre) => {
                if (genre.value === true) { trueValues.push(genre.genre_name) };
                return trueValues;
            }, []);

            const listToBeDisplayed = songList.reduce((list, song) => {
                if (compGenre.includes(song.genre)) { list.push(song) };
                return list;
            },[]);
            
            displaySongs = listToBeDisplayed;
        };
            
        if (filterRating > 0) {    
            const listToBeDisplayed = displaySongs.reduce((list, song) => {
                if (parseInt(filterRating, 10) === song.rating) { list.push(song) };
                return list;
            },[]);
        
        displaySongs = listToBeDisplayed;
        };

        if (displayByGenre) {
            const songsByGenre = getSongsByGenre( getUniqueGenres(displaySongs) , displaySongs );
            if (songsByGenre.length > 0) {
            return ( 
                <div className='songlist__container'>
                    {songsByGenre.map(genre => {
                        return <SongList 
                            key={genre.genre_name} 
                            genre={genre.genre_name} 
                            songList={genre.song} 
                            ></SongList>
                    })}
                </div>
            );
            } else {
                return (
                    <Message />
                )
            };
        };

        if (displaySongs.length > 0) {
            return ( 
                <div className='songlist__container'>
                    <SongList 
                        songList={displaySongs} 
                        ></SongList>
                </div>
            );
        } else {
            return (
                <Message />
            );
        };          

    }

    const toBeDisplayed = displaySongList();

    return (
        <div className="container">
            <div className='form__container'>
                <InputForm 
                    />
                <FilterForm 
                    />
            </div>
            {toBeDisplayed}
        </div>
    );
}

export default Container;