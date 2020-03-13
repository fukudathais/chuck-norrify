import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { TiArrowLeft } from "react-icons/ti";
import Joke from '../../components/Joke';
import CategoryList from '../../components/CategoryList';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import Api from '../../utils/api';

import './Category.scss';

const CategoryListWithLoading = Loading(CategoryList);

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            category: props.match.params.category,
            loading: false
        };
    }

    componentWillMount() {
        const category = this.state.category;

        this.setState({ loading: true });

        Api.getJoke(category)
            .then(res => {
            this.setState({joke: res.data.value, loading: false});
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
                    <CategoryListWithLoading isLoading={this.state.loading} />
                    <Footer />
                </div>
            </section>
        );
    }
};

export default Category;