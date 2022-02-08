import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import Search from "./pages/search";
import Favorites from "./pages/favorites";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/" component={Search} />
                <Route exact path="/favorites" component={Favorites} />
                <Redirect to="/" />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
