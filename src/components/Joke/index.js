import React, { Component } from 'react';
import Api from '../../utils/api';

import { TiArrowShuffle } from 'react-icons/ti';

import './Joke.scss';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category,
            joke: this.props.jokeValue,
            loading: false
        };

        this.getJoke = this.getJoke.bind(this);

        this.getJoke();
    }

    getJoke() {
        Api.getJoke(this.state.category)
            .then(res => {
                this.setState({joke: res.data.value});
            });
    }

    render() {
        return (
            <div className="Joke">
                <div className="JokeContent">
                    <h2>{this.state.joke}</h2>
                    <span onClick={this.getJoke} className="GetJokeBtn">
                        shuffle joke <TiArrowShuffle />
                    </span>
                    <span className="CategoryName">{this.state.category}</span>
                </div>
            </div>
        );
    }
};

export default Joke;