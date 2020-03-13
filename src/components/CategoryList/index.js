
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api';

import './CategoryList.scss';

class CategoryList extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            key: ''
        }
    };

    componentWillMount() {
        Api.getCategories()
        .then(res => this.setState({ categories: res.data }))
    }

    render() {
        return (
            <ul className="Categories">
                {
                    this.state.categories.map((category, key) => {
                        return(
                            <Link to={`/category/${category}`}
                            className = { this.state.key === key ? 'active' : '' }
                            key={key}
                            onClick={() =>{
                                return this.setState({key:key})
                            }
                            }>{category}</Link>
                        )
                    }
                )}
            </ul>
        );
    }
};

export default CategoryList;