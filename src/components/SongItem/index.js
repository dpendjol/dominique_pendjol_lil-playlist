import React from 'react'
import './SongItem.css'

function SongHeader () {
    return (
        <li className="SongItem SongItem__title">
            <span>
                Titel
            </span>
            <span>
                Artiest
            </span>
            <span>
                Genre
            </span>
            <span>
                Rating
            </span>
        </li>
    );
}

function SongItem ({song}) {
    return (
        <li className='SongItem'>
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
        </li>
    )
}

export { SongItem, SongHeader }