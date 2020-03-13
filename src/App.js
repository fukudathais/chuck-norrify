import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './styles/App.scss';

const Home = lazy(() => import('./pages/Home'));
const Category = lazy(() => import('./pages/Category'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div className="App">Loading...</div>}>
                <main className="App">
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route path="/category/:category" component={Category} />
                    </Switch>
                </main>
            </Suspense>
        </Router>
    );
}

export default App;
