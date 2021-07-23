import React from 'react';
import {Route, Switch} from "react-router-dom";
import Inicio from "../pages/Inicio";
import Bill from "../pages/Bill";
import Login from "../pages/Login";
import FormBill from "../pages/FormBill";


const Navigation = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Inicio />
            </Route>
            <Route path="/bill">
                <Bill />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/formBill">
                <FormBill/>
            </Route>
        </Switch>
    )
}

export default Navigation;