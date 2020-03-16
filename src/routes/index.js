import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "../components/Menu";
import Users from '../components/Table'

const App = () => {
    return (
        <Router>
            <Menu />
            <div className="marginTable">
                <Switch>
                    <Route exact path="/" component={Users} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
