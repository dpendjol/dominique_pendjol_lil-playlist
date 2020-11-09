import React, {useState} from 'react';
import './SongList.css'

const SongList = ({ songList, options}) => {
    const [sortBy, setSortBy] = useState(null)
    const [sortOrder, setSortOrder] = useState(true)
    
    const sortedSongList = [...songList]
    
    const sorting = (key) => {
        if (sortBy === key) {
            setSortOrder(!sortOrder)
        } else {
            setSortOrder(true)
            setSortBy(key)
        }
    }

    const handleClickDelete = (event) => {
        options.delete(event.target.value)
    }

    const handleClickEdit = () => {

    }

    const getClass = (column) => {
        if (sortBy === null) {
            return
        }

        if (sortBy === column) {
            return sortOrder ? 'ascending' : 'descending'
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
                {options ? 
                        <td> 
                        <button value={song.id} onClick={handleClickDelete}>delete</button>
                        {/* <button onClick={handleClickEdit}>edit</button>  */}
                        </td> 
                    : 
                        null
                    }
            </tr>
        )
    })

    return (
        <table className='SongList'>
            <caption>Alle liedjes</caption>
            <thead>
                <tr>
                    <th onClick={() => sorting('title')} className={getClass('title')}>Titel</th>
                    <th onClick={() => sorting('artist')} className={getClass('artist')}>Artiest</th>
                    <th onClick={() => sorting('genre')} className={getClass('genre')}>Genre</th>
                    <th onClick={() => sorting('rating')} className={getClass('rating')}>Rating</th>
                    {options ? <th> Options </th> : null}
                </tr>
            </thead>
            <tbody>
            {allSongItems}
            </tbody>
            
        </table>
    )
}

export default SongList