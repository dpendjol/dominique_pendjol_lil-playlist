import React from 'react'

import './Nav.css'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navigation">
            <h3>Navigatie:</h3>
            <ul className="navigation__list">
                <NavLink exact to='/' activeClassName="navigation__item--active">
                    <li className="navigation__item">Home</li>
                </NavLink>
                <NavLink to='/about' activeClassName="navigation__item--active">
                    <li className="navigation__item">
                        About
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav