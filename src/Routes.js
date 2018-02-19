import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Create from './pages/Create';
import View from './pages/View';

const Routes = () => (
 <Router>
    <div>
        <Route path="/" component={App}/>
        <Route exact path="/create" component={Create} />
        <Route exact path="/view" component={View} />
        {/* TODO: YourProducts.html */}
    </div>
 </Router>
);

export default Routes;