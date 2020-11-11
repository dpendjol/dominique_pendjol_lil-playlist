import React from 'react'
import {useState, useEffect} from 'react'
import InputForm from '../InputForm'
import SongList from '../SongList'
import {v4 as uuid} from 'uuid'
import './container.css'

import FilterForm from '../FilterForm'

import mySampleData from './mySampleData'

const Container = () => {
    const [songList, setSongList] = useState(mySampleData)
    const [byGenre, setByGenre] = useState(false)
    const [allGenres, setAllGenres] = useState([])
    const [genresTrue, setGenresTrue] = useState(0)
    const [filterRating, setFilterRating] = useState(0)
    
    // Execute load of component filter assignment if a song is added
    useEffect(() => {
        const uniqueGenres = getUniqueGenres(songList)
        const arrObjGenres = []
        uniqueGenres. forEach(genre => {
            arrObjGenres.push({id: uuid(), genre_name: [genre], value: false})
        })

        setAllGenres(arrObjGenres)
    },[songList])
    
    //filter assignment

    // start add song assignment
    const addSong = (newSong) => {
        setSongList([...songList, newSong])
    }
    // stop add song assignment

    // start delete song assignment
    const deleteSong = (delSong) => {
        const newSongList = songList.filter(song => {
            if (song.id !== delSong) {
                return true
            }
            return false
        })
        setSongList(newSongList)
    }
    // stop delete song assignment

    // CATEGORISEREN
    const getUniqueGenres = (listOfSongs) => {
        const allGenres = listOfSongs.map(song => song.genre)
            .reduce((genres, currentValue) => {
            return genres.includes(currentValue) ? genres : [...genres, currentValue]
        }, [])
        return allGenres
    }

    const getSongsByGenre = (uniqueGenres, songList) => {
        let array = [];
        uniqueGenres.forEach(genre => {
            array.push({genre_name: genre, song: songList.filter(song => song.genre.toLowerCase() === genre.toLowerCase())})
        })
        return array
    }

    const arraySongList = () => {
 
        let displaySongs = [...songList]
       
        if (byGenre) {
            const songsByGenre = getSongsByGenre(getUniqueGenres(songList), songList)
            return (
                <div className='SongListContainer'>
                    {songsByGenre.map(genre => {
                        return <SongList genre={genre.genre_name} songList={genre.song} options={{delete: deleteSong}}></SongList>
                    })}
                </div>
            )
        } else if (genresTrue > 0 || filterRating > 0) { 
            
            if (genresTrue > 0) {
            
            const compGenre = allGenres.reduce((trueValues, genre) => {
                if (genre.value === true) {
                    // for some reason the genre.genre_name is a array, therefore a destructure before a push
                    trueValues.push(...genre.genre_name)
                }
                return trueValues
            }, [])

            const listToBeDisplayed = songList.reduce((list, song) => {
                if (compGenre.includes(song.genre)) {
                    list.push(song)
                }
                return list
            },[])
            
            displaySongs = listToBeDisplayed
            }
            
            
            if (filterRating > 0) {

            
            const listToBeDisplayed = displaySongs.reduce((list, song) => {
                if (filterRating == song.rating) {
                    list.push(song)
                }
                return list
            },[])
         
            displaySongs = listToBeDisplayed
            }

        } else {
            return (
                <div className='SongListContainer'>
                    <SongList songList={songList} options={{delete: deleteSong}}></SongList>
                </div>
            )
        }

        if (filterRating > 0 || genresTrue > 0) {
            return (
                <div className='SongListContainer'>
                    <SongList songList={displaySongs} options={{delete: deleteSong}}></SongList>
                </div>
            )
        }
    }
    //  CATEGORISEREN

    // filter assignment
    const changeGenreFilter = (id, checked) => {
        let number = 0
        if (checked == true) {
            number = genresTrue + 1
        } else {
            number = genresTrue - 1
        }

        const alterdGenres = allGenres.map(genre => {
            if (genre.id === id) {
                genre.value = checked
            } 
            return genre
        })
        setGenresTrue(number)
        setAllGenres(alterdGenres)
    }


    const changeRatingFilter = (value) => {
        console.log('Setting filter rating to: ', value)
        setFilterRating(value)
    }
    //filter assignment


    const toReturn = arraySongList();

    return (
        <div className="Container">
            <div className='FormContainer'>
                <InputForm addSong={addSong}></InputForm>
                <FilterForm genres={allGenres} changeGenreFilter={changeGenreFilter} rating={filterRating} changeRatingFilter={changeRatingFilter} />
            </div>
            {toReturn}
        </div>
    )
}

export default Container