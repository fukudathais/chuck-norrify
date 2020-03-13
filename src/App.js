import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './styles/App.scss';

import Spinner from './components/Loading/Spinner';
import PageNotFound from './pages/PageNotFound';

const Home = lazy(() => import('./pages/Home'));
const Category = lazy(() => import('./pages/Category'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div className="App"><Spinner /></div>}>
                <main className="App">
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route path="/category/:category" component={Category} />

                        <Route path='*' exact={true} component={PageNotFound} />
                    </Switch>
                </main>
            </Suspense>
        </Router>
    );
}

export default App;
