import React from 'react';
import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './InputForm.css'

class InputForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            artist: '',
            genre: '',
            rating: 0
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick (event) {
        this.props.addSong( 
            { 
                id: uuid(),
                title: this.state.title,
                artist: this.state.artist,
                genre: this.state.genre,
                rating: this.state.rating
            }
        )

        this.setState(
            {
                title: '',
                artist: '',
                genre: '',
                rating: 0
            }
        )
        event.preventDefault()
    }

    handleChange (event) {
        const inputName = event.target.name
        const inputValue = event.target.value

        let returnObject = {}

        switch (inputName) {
            case 'title':
                returnObject = {title: inputValue};
                break;
            case 'artist':
                returnObject = {artist: inputValue}
                break;
            case 'genre':
                returnObject = {genre: inputValue}
                break;
            case 'rating':
                returnObject = {rating: inputValue}
                break;
            default:
                return;
        }
        console.log(returnObject)
        this.setState(returnObject)
    }

    render() {
        return (
            <form className='InputForm' onSubmit={this.handleClick}>
                <label>
                    <span>Titel</span>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
                </label>

                <br />

                <label>
                    <span>Artiest</span>
                    <input type='text' name='artist' value={this.state.artist} onChange={this.handleChange} />
                </label>
                
                <br />

                <label>
                    <span>Genre</span>
                    <input type='text' name='genre' value={this.state.genre} onChange={this.handleChange} />
                </label>
                
                <br />

                <label>
                    <span>Rating</span>
                    <label>
                        <input type='radio' name='rating' value={1} onChange={this.handleChange} />
                        1
                    </label>
                    <label>
                        <input type='radio' name='rating' value={2} onChange={this.handleChange} />
                        2
                    </label>
                    <label>
                        <input type='radio' name='rating' value={3} onChange={this.handleChange} />
                        3
                    </label>
                    <label>
                        <input type='radio' name='rating' value={4} onChange={this.handleChange} />
                        4
                    </label>
                    <label>
                        <input type='radio' name='rating' value={5} onChange={this.handleChange} />
                        5
                    </label>
                </label>

                <br />
                
                <button>Toevoegen</button>
            </form>
        )
    }
}

export default InputForm