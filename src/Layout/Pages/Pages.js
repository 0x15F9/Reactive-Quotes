import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import Create from './Create/Create';

const Pages = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/create' component={Create}/>
            </Switch>
        </div>

    );
}

export default Pages;