import React from 'react'
import {useState} from 'react'
import InputForm from '../InputForm'
import SongList from '../SongList'
import './container.css'

import mySampleData from './mySampleData'

const Container = () => {
    const [songList, setSongList] = useState(mySampleData)
    const [byGenre, setByGenre] = useState(true)
    
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
        return listOfSongs.map(song => song.genre)
            .reduce((genres, currentValue) => {
            return genres.includes(currentValue) ? genres : [...genres, currentValue]
        }, [])
    }

    const getSongsByGenre = (uniqueGenres, songList) => {
        let array = [];
        uniqueGenres.forEach(genre => {
            array.push({genre_name: genre, song: songList.filter(song => song.genre.toLowerCase() === genre.toLowerCase())})
            console.log('return filter: ', songList.filter(song => song.genre === genre))
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
        } else {
            return (
                <div className='SongListContainer'>
                <SongList songList={songList} options={{delete: deleteSong}}></SongList>
                </div>
            )
        }
    }
    //  CATEGORISEREN

    const toReturn = arraySongList();
    console.log(toReturn)

    return (
        <div className="Container">
            <InputForm addSong={addSong}></InputForm>
            {toReturn}
        </div>
    )
}

export default Container