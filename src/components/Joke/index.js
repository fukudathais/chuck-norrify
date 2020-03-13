import React, { Component } from 'react';
import Api from '../../utils/api';

import Spinner from '../Loading/Spinner';
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
    }

    componentWillMount() {
        this.getJoke();
    }

    getJoke() {
        this.setState({loading:true});

        Api.getJoke(this.state.category)
            .then(res => {
                this.setState({joke: res.data.value, loading: false});
            });
    }

    render() {
        return (
            <div className="Joke">
                <div className="JokeContent">
                    <h2>
                        {
                            this.state.loading === true ?
                                <Spinner /> :
                                this.state.joke
                        }
                    </h2>
                    <span onClick={this.getJoke} className="GetJokeBtn">
                        shuffle joke <TiArrowShuffle />
                        <b className="CategoryName">{this.state.category}</b>
                    </span>
                </div>
            </div>
        );
    }
};

export default Joke;