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
            newGenreCB: false,
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
                newGenreCB: false
            }
        )
        event.preventDefault()
    }

    handleChange (event) {
        const inputName = event.target.name
        const inputValue = event.target.value

        let returnObject = {}

        // switch (inputName) {
        //     case 'title':
        //         returnObject = {song: {...this.state.song, title: inputValue} };
        //         break;
        //     case 'artist':
        //         returnObject = {song: {...this.state.song, artist: inputValue} }
        //         break;
        //     case 'genre':
        //         returnObject = {song: {...this.state.song, genre: inputValue} }
        //         break;
        //     case 'rating':
        //         returnObject = {song: {...this.state.song, rating: inputValue} } 
        //         break;
        //     default:
        //         return;
        // }

        returnObject = {song: {...this.state.song, [inputName]: inputValue} }
        
        console.log('State: ', this.state)
        console.log('Return Object: ', returnObject)
        
        this.setState(returnObject)
    }

    render() {
        return (
            <div className="input__container">
                <label>Nieuw liedje invoeren</label>
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
                        <input 
                            type='text' 
                            name='genre' 
                            value={this.state.song.genre} 
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
                    
                    <button>Toevoegen</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = () => {
    return {
        songAdd: songAdd
    }
}

export default connect(null, mapDispatchToProps())(InputForm)