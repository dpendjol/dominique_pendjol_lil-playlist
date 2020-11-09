import React from 'react'
import {useState} from 'react'
import InputForm from '../InputForm'
import SongList from '../SongList'
import './container.css'

// const initialSongList = [ 
//     { 
//         id: 0,
//         title: 'Conquest of Paradise',
//         artist: 'Vangelis',
//         genre: 'classic',
//         rating: 3
//     },
//     { 
//         id: 1,
//         title: 'November Rain',
//         artist: 'Guns N\' Roses',
//         genre: 'rock',
//         rating: 4
//     },
//     { 
//         id: 2,
//         title: 'The Sweetest Taboo',
//         artist: 'Sade',
//         genre: 'pop',
//         rating: 2
//     },
//     { 
//         id: 3,
//         title: 'My Immortal',
//         artist: 'Evanescence',
//         genre: 'rock',
//         rating: 4
//     },
// ]

const Container = () => {
    const [songList, setSongList] = useState([])
    
    const addSong = (newSong) => {
        setSongList([...songList, newSong])
    }

    const deleteSong = (delSong) => {
        console.log('deleteSong functie uit container')
        const newSongList = songList.filter(song => {
            if (song.id !== delSong) {
                return true
            }
            return false
        })
        setSongList(newSongList)
    }
    
    // const deleteSong = oldSong => {
    //     const newSongList = songList
    // }

    return (
        <div className="Container">
            <InputForm addSong={addSong}></InputForm>
            <SongList songList={songList} options={{delete: deleteSong}}></SongList>
        </div>
    )
}

export default Container