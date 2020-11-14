import React from 'react';

import './Nav.css';
import {NavLink} from 'react-router-dom';

import {useDispatch} from 'react-redux';
import { toggleDisplayMode } from '../../0-Actions';

const Nav = () => {
    const dispatch = useDispatch();

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
            <button onClick={() => dispatch( toggleDisplayMode() )}> Toggle view </button>
        </nav>
    );
}

export default Nav;