
import React from 'react';
import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div className="HomePage container">
            <Header />
            <CategoryList />
            <Footer />
        </div>
    );
};

export default Home;