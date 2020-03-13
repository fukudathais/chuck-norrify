
import React from 'react';
import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';

const Home = () => {
    return (
        <div className="HomePage container">
            <Header />
            <CategoryList />
        </div>
    );
};

export default Home;