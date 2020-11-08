import React from 'react';

// import CSS styling
import './SongHeader.css'

function SongHeader () {
    return (
        <div className="SongHeader">
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
        </div>
    );
}

export default SongHeader;