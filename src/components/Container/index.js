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
    
    // Execute once on load of component filter assignment
    useEffect(() => {
        const uniqueGenres = getUniqueGenres(songList)
        const arrObjGenres = []
        uniqueGenres.forEach(genre => {
            arrObjGenres.push({id: uuid(), genre_name: [genre], value: false})
        })

        setAllGenres(arrObjGenres)
    },[songList])
    
    //filter assignment

    const addSong = (newSong) => {
        setSongList([...songList, newSong])
    }

    const deleteSong = (delSong) => {
        const newSongList = songList.filter(song => {
            if (song.id !== delSong) {
                return true
            }
            return false
        })
        setSongList(newSongList)
    }

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
        if (byGenre) {
            const songsByGenre = getSongsByGenre(getUniqueGenres(songList), songList)
            return (<div className='SongListContainer'>
                {songsByGenre.map(genre => {
                    return <SongList genre={genre.genre_name} songList={genre.song} options={{delete: deleteSong}}></SongList>
                })}
                </div>
            )
        } else if (genresTrue > 0) { 
            // get a list of all genres that need to be displayed
            
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
            return (
                <div className='SongListContainer'>
                    <SongList songList={listToBeDisplayed} options={{delete: deleteSong}}></SongList>
                </div>
            )
        
        } else {
            return (
                <div className='SongListContainer'>
                <SongList songList={songList} options={{delete: deleteSong}}></SongList>
                </div>
            )
        }
    }
    //  CATEGORISEREN
    
    
    const uniqueGenres = getUniqueGenres(songList)
    const toReturn = arraySongList();


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

    //filter assignment

    return (
        <div className="Container">
            <div className='FormContainer'>
                <InputForm addSong={addSong}></InputForm>
                <FilterForm genres={allGenres} changeGenreFilter={changeGenreFilter} />
            </div>
            {toReturn}
        </div>
    )
}

export default Container