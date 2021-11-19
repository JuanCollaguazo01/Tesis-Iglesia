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
import UpdateProfile from "../pages/UpdateProfile";
import MyForumsAdmin from "../pages/MyForumsAdmin";
import ProfileAdmin from "../pages/ProfileAdmin";
import UpdateProfileAdmin from "../pages/UpdateProfileAdmin";
import RegisterSeatAdmin from "../pages/RegisterSeatAdmin";
import UsuariosAdmin from "../pages/UsuariosAdmin";
//import SelectDate from "../pages/SelectDate";


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
            <Route path="/actualizarperfil/:uid">
                <UpdateProfile/>
            </Route>
            <Route path="/misforosadmin/:uid">
                <MyForumsAdmin/>
            </Route>
            <Route path="/perfiladmin/:uid">
                <ProfileAdmin/>
            </Route>
            <Route path="/actualizarperfiladmin/:uid">
                <UpdateProfileAdmin/>
            </Route>
            <Route path="/registerseatadmin/:uid">
                <RegisterSeatAdmin />
            </Route>
            <Route path="/usuariosadmin/:uid">
                <UsuariosAdmin/>
            </Route>
            { 
            /*
            <Route path="/selectdate/:uid">
                <SelectDate/>
            </Route>
            */
            }
        </Switch>
    )
}

export default Navigation;