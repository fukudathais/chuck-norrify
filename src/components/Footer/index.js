
import React, { Component } from 'react';
import { TiHeart } from 'react-icons/ti';

class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                made with <TiHeart /> by <a href="https://github.com/fukudathais">Thais Fukuda</a>
            </footer>
        );
    }
};

export default Footer;