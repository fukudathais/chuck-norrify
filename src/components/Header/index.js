
import React, { Component } from 'react';
import logo from '../../chuck.gif';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1>
                    ChuckNorrify
                    <img src={logo} className="App-logo" alt="logo" />
                </h1>
                <p>choose a category to load a random fact about Chuck Norris.</p>
            </header>
        );
    }
};

export default Header;