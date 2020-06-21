import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from '../layout/Home'
import AddSubDiv from '../layout/AddSubDiv'

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/addsubdiv" component={AddSubDiv}></Route>
            </Switch>
        </BrowserRouter>
    );
};


export default MyRouter;