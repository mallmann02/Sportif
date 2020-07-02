import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from "./services/auth";

import Register from './pages/Register';
import Volleyball from './pages/Volleyball';
import Home from './pages/Home';
import Logon from './pages/Logon';
import Teacher from './pages/Teacher';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/logon", state: { from: props.location } }} />
        )
      }
    />
  );

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            
            <Route path="/register" component={Register} />
            
            <Route path="/volleyball_team" component={Volleyball}/>
            
            <PrivateRoute path="/teacher" component={Teacher}/>

            <Route path="/logon" component={Logon}/>
        </Switch>
    
    </BrowserRouter>
    );
}