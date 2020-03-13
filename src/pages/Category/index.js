import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { TiArrowLeft } from "react-icons/ti";
import Joke from '../../components/Joke';
import CategoryList from '../../components/CategoryList';
import Api from '../../utils/api';

import './Category.scss';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            category: props.match.params.category
        };
    }

    componentWillMount() {
        const category = this.state.category;

        Api.getJoke(category)
            .then(res => {
            this.setState({joke: res.data.value});
        });
    }

    render() {
        return (
            <section className="CategoryPage">
                <div className="container">
                    <h1>ChuckNorrify</h1>
                    <Link to="/" className="backBtn"><TiArrowLeft /> back</Link>
                    <Joke category={this.state.category} jokeValue={this.state.joke} />
                    <h4>read jokes from other categories:</h4>
                    <CategoryList />
                </div>
            </section>
        );
    }
};

export default Category;