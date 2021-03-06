import React from 'react';
import {Form, Input, Button, Card, message} from "antd";
import '../styles/login.css';
import '../styles/bill.css';
import Foot from "../components/Foot";
import HeaderRegister from "../components/HeaderRegister";
import {Link} from "react-router-dom";
import FIREBASE from "../firebase";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();


    const handleLogin = async (values) => {
        
        try {
            await FIREBASE.auth.signInWithEmailAndPassword(values.userMail, values.userPassword);
            await FIREBASE.auth.onAuthStateChanged(function (user) {
                if(values.userMail === "admin@hotmail.com"){
                    let uid = user.uid;
                    history.push(`/forosprincipal/${uid}`);
                }else{
                if (user) {
                    // User is signed in.
                    let uid = user.uid;
                    //console.log('Pasar uid', uid);
                    history.push(`/misforos/${uid}`);
                } else {
                    // User is signed out.
                    //console.log('user loggedOut');
                    history.replace("/");
                }
            }
            });
        } catch(error) {
            message.error(error.message)
        }
    }

    return (
        <div>
            <HeaderRegister/>
            <div className=" site-card-border-less-wrapper fondo-login" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Card className="BaseB cuadro-interno "  bordered={false}>
                    <h1>
                        Iniciar sesión 
                    </h1>
                    <div>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 24 }}       
                            initialValues={{remember: true}}
                            onFinish={handleLogin}

                        >
                            <Form.Item
                                label="Email"
                                name="userMail"
                                rules={[{required: true, message: 'Ingrese su correo!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Contraseña"
                                name="userPassword"
                                rules={[{required: true, message: 'Ingrese su contraseña!'}]}
                            >
                                <Input.Password/>
                            </Form.Item>
                            <p><Link to="/passwordreset">¿Haz olvidado tu contraseña?</Link></p>
                            <p> <Link to="/bill">Crear cuenta</Link></p>
                            <Form.Item>
                                <Button type="primary"  shape="round" htmlType="submit">
                                    Iniciar Sesion
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    </Card>
                </Card>
            </div>
            <Foot/>

        </div>
    );

}

export default Login;