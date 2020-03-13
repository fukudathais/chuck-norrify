import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { TiThSmall } from "react-icons/ti";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './PageNotFound.scss';

class PageNotFound extends Component {
    render() {
        return (
            <section className="PageNotFound">
                <div className="container">
                    <Header />
                    <div className="PageNotFoundContent">
                        <h1>404</h1>
                        <p>Ooooops. It seems like we couldn't reach the page you are looking for. Only <b>Chuck Norris</b> is capable of.</p>
                        <Link to="/" className="seeCategories"><TiThSmall /> see all categories</Link>
                    </div>
                    <Footer />
                </div>
            </section>
        );
    }
};

export default PageNotFound;