import {Route, Switch} from "react-router-dom";
import Inicio from "../pages/Inicio";
import Bill from "../pages/Bill";
import Login from "../pages/Login";
import React from "react";
import PasswordReset from "../pages/PasswordReset";
import MainForum from "../pages/MainForum";
import Profile from "../pages/Profile";
import RegisterSeat from "../pages/RegisterSeat";
import FormBill from "../pages/FormBill";
import MyForums from "../pages/MyForums";
import CreateForum from "../pages/CreateForum";
import Forum from "../pages/Forum";
import UpdateProfile from "../pages/UpdateProfile";

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
            <Route path="/registerseat/:uid">
                <RegisterSeat />
            </Route>
            <Route path="/passwordreset">
                <PasswordReset/>
            </Route>
            <Route path="/formBill">
                <FormBill/>
            </Route>
            <Route path="/forosprincipal/:uid">
                <MainForum />
            </Route>
            <Route path="/perfil/:uid">
                <Profile/>
            </Route>
            <Route path="/misforos/:uid">
                <MyForums/>
            </Route>
            <Route path="/crearforos/:uid">
                <CreateForum/>
            </Route>
            <Route path="/foro/:id/:uid">
                <Forum/>
            </Route>
            <Route path="/actualizarperfil/:uid">
                <UpdateProfile/>
            </Route>
        </Switch>
    )
}

export default Navigation;