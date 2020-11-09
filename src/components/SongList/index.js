import React, {useState} from 'react';
import './SongList.css'

const SongList = ({ songList}) => {
    const [sortBy, setSortBy] = useState(null)
    const [sortOrder, setSortOrder] = useState(true)
    
    const sortedSongList = [...songList]
    
    const sorting = (key) => {
        if (sortBy === key) {
            setSortOrder(!sortOrder)
        } else {
            setSortBy(true)
            setSortBy(key)
        }
    }

    if (sortBy !== null) {
        sortedSongList.sort((a,b) => {
            if (a[sortBy] < b[sortBy]) return sortOrder ? -1 : 1
            if (a[sortBy] > b[sortBy]) return sortOrder ? 1 : -1
            return 0
        })
    }
    
    const allSongItems = sortedSongList.map(song => {
        return (
            <tr key={song.id}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.rating}</td>
            </tr>
        )
    })

    return (
        <table className='SongList'>
            <caption>Alle liedjes</caption>
            <thead>
                <tr>
                    <th onClick={() => sorting('title')}>Titel</th>
                    <th onClick={() => sorting('artist')}>Artiest</th>
                    <th onClick={() => sorting('genre')}>Genre</th>
                    <th onClick={() => sorting('rating')}>Rating</th>
                </tr>
            </thead>
            <tbody>
            {allSongItems}
            </tbody>
            
        </table>
    )
}

export default SongList