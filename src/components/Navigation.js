import React from 'react';
import {Route, Switch} from "react-router-dom";
import Inicio from "../pages/Inicio";




const Navigation = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Inicio />
            </Route>
            
            
        </Switch>
    )
}

export default Navigation;