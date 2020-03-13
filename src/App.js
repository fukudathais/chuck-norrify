import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './styles/App.scss';

import Home from './pages/Home';
import Category from './pages/Category';

const App = () => {
    return (
        <Router>
            <main className="App">
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route path="/category/:category" component={Category} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
