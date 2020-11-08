import React from 'react';
import {SongItem, SongHeader} from '../SongItem'
import './SongList.css'

const SongList = ({ songList }) => {
    console.log(songList)
    const allSongItems = songList.map(song => {
        return (
            <SongItem key={song.id} song={song}></SongItem>
        )
    })

    return (
        <ul className='SongList'>
            <SongHeader></SongHeader>
            {allSongItems}
        </ul>
    )
}

export default SongList