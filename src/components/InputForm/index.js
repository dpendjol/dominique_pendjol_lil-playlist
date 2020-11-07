import React from 'react';
import {Component} from 'react'

class InputForm extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <form>
                <label>
                    Titel
                    <input type='text'/>
                </label>

                <br />

                <label>
                    Artiest
                    <input type='text'/>
                </label>
                
                <br />

                <label>
                    Genre
                    <select>
                        <option>Option one</option>
                        <option>Option two</option>
                        <option>Option three</option>
                        <option>Option four</option>
                    </select>
                </label>
                
                <br />

                <label>
                    Rating
                    <label>
                        <input type='radio' name='rating' />
                        1
                    </label>
                    <label>
                        <input type='radio' name='rating' />
                        2
                    </label>
                    <label>
                        <input type='radio' name='rating' />
                        3
                    </label>
                    <label>
                        <input type='radio' name='rating' />
                        4
                    </label>
                    <label>
                        <input type='radio' name='rating' />
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