import React from 'react'
import './SongItem.css'

function SongItem ({song}) {
    return (
        <div className='SongItem'>
            <span>
                {song.title}
            </span>
            <span>
                {song.artist}
            </span>
            <span>
                {song.genre}
            </span>
            <span>
                {song.rating}
            </span>
        </div>
    )
}

export default SongItem