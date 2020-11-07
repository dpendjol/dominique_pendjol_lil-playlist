import React from 'react'
import FormInput from '../InputForm'
import DisplayScreen from '../DisplayScreen'
import './container.css'

const Container = () => {
    return (
        <div className="container">
            <FormInput></FormInput>
            <DisplayScreen></DisplayScreen>
        </div>
    )
}

export default Container