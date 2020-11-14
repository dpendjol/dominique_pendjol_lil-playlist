import React from 'react';
import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './InputForm.css'

import {connect} from 'react-redux'
import {songAdd} from '../../0-Actions'

/** This component is connected to a Redux Store. It only makes use of the songAdd action */

class InputForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            song: {
                title: '',
                artist: '',
                genre: '',
                rating: 0
            },
            newGenre: false,
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    
    handleClick (event) {
        this.props.songAdd( 
            { 
                id: uuid(),
                title: this.state.song.title,
                artist: this.state.song.artist,
                genre: this.state.song.genre.toLocaleLowerCase(),
                rating: this.state.song.rating
            }
        )

        this.setState(
            {
                song: {
                    title: '',
                    artist: '',
                    genre: '',
                    rating: 0
                },
                newGenre: false
            }
        )
        event.preventDefault()
    }

    handleChange (event) {
        const {name, type} = event.target

        let returnObject = {}
        if (type !=="checkbox") {
            let {value} = event.target
            value = value === " " ? "" : value 
            returnObject = {song: {...this.state.song, [name]: value} }
        } else {
            const {checked} = event.target
            returnObject = { song: {...this.state.song, genre: ""},
                            [name]: checked
                            }
        }
        
        this.setState(returnObject)
    }

    render() {
        return (
            <div className="input__container">
                <label>Nieuw liedje invoeren <i className="fas fa-question-circle tooltip">
                <span className="tooltiptext">Als het hele formulier is ingevuld, dan wordt de knop geactiveerd.</span></i>
                </label>
                <form 
                    className='input__form' 
                    onSubmit={this.handleClick
                    }>
                    <label>
                        <span>Titel</span>
                        <input 
                            type='text' 
                            name='title' 
                            value={this.state.song.title} 
                            onChange={this.handleChange} 
                            />
                    </label>

                    <br />

                    <label>
                        <span>Artiest</span>
                        <input 
                            type='text' 
                            name='artist' 
                            value={this.state.song.artist} 
                            onChange={this.handleChange} 
                            />
                    </label>
                    
                    <br />

                    <label>
                        <span>Genre</span>
                        <select 
                            name="genre" 
                            value={this.state.song.genre} 
                            onChange={this.handleChange} 
                            disabled={this.state.newGenre}>
                            <option value="">--Geen selectie--</option>
                        {
                        
                            this.props.uniqueGenres.map(genre => {
                                const genreName = genre.genre_name.toString()
                                return <option key={genre.id} value={genreName}>{genreName}</option>
                            })
                        
                        }
                        </select>
                        
                        {this.state.newGenre ? 
                        <label>Voeg toe
                            <input 
                                type='text' 
                                name='genre' 
                                value={this.state.song.genre} 
                                onChange={this.handleChange} 
                                />
                        </label>
                            :
                            null
                        }
                    </label>
                    <label>
                    {!this.state.newGenre ? 
                            <span className="text__small">Voeg nieuw genre toe</span> 
                            : 
                            <span className="text__small">toch niet...</span>
                            }
                        <input
                            type="checkbox"
                            name="newGenre"
                            checked={this.state.newGenre}
                            onChange={this.handleChange}
                            />
                    </label>
                    
                    <br />
                    
                    <label>
                        <span>Rating</span>
                        <label>
                            <input 
                                type='radio' 
                                name='rating' 
                                value={1} 
                                checked={this.state.song.rating === '1'}
                                onChange={this.handleChange} 
                                />
                            1
                        </label>
                        <label>
                            <input 
                                type='radio' 
                                name='rating' 
                                value={2} 
                                checked={this.state.song.rating === '2'}
                                onChange={this.handleChange} 
                                />
                            2
                        </label>
                        <label>
                            <input 
                                type='radio' 
                                name='rating' 
                                value={3} 
                                checked={this.state.song.rating === '3'}
                                onChange={this.handleChange} 
                                />
                            3
                        </label>
                        <label>
                            <input 
                                type='radio' 
                                name='rating' 
                                value={4} 
                                checked={this.state.song.rating === '4'}
                                onChange={this.handleChange} 
                                />
                            4
                        </label>
                        <label>
                            <input 
                                type='radio' 
                                name='rating' 
                                value={5} 
                                checked={this.state.song.rating === '5'}
                                onChange={this.handleChange} 
                                />
                            5
                        </label>
                    </label>

                    <br />
                    
                    <button disabled={
                        !(this.state.song.title !== "" &&
                        this.state.song.artist !== "" &&
                        this.state.song.genre !== "" &&
                        this.state.song.rating !== 0)
                        }
                    >Toevoegen</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const uniqueGenres = state
    return uniqueGenres
}

const mapDispatchToProps = () => {
    return {
        songAdd: songAdd
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(InputForm)