
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TiHeart } from 'react-icons/ti';

class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                made with <TiHeart /> by <Link to="https://github.com/fukudathais">Thais Fukuda</Link>
            </footer>
        );
    }
};

export default Footer;