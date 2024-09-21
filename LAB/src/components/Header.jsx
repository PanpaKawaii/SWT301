import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li><a className='active' href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}
