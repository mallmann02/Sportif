import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './pages/Register';
import AboutTeam from './pages/aboutTheTeam';

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Register} />
            
            <Route path="/AboutTheTeam" component={AboutTeam}/>

        </Switch>
    
    </BrowserRouter>
    );
}