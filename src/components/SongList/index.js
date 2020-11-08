import React from 'react';
import SongHeader from '../SongHeader'
import SongItem from '../SongItem'

const SongList = ({ songList }) => {
    console.log(songList)
    const allSongItems = songList.map(song => {
        return (
            <SongItem key={song.id} song={song}></SongItem>
        )
    })

    return (
        <div>
            <SongHeader></SongHeader>
            {allSongItems}
        </div>
    )
}

export default SongList