import React from 'react';
import {Form, Input, Button, Card,message} from "antd";
import '../styles/login.css';
import '../styles/bill.css';
import Foot from "../components/Foot";
import {Link, useHistory} from "react-router-dom";
import FIREBASE from "../firebase";
import HeaderRegister from "../components/HeaderRegister";


const PasswordReset = () => {

    const history=useHistory();
    const handleChangePassword=({usermail})=>{
        FIREBASE.auth.sendPasswordResetEmail(usermail).then(function() {
            message.success('Correo enviado, en caso de no encontrarlo en la bandeja de entrada. Por favor revisé en correos no deseados')
            history.push("/Login")
        }).catch(function(error) {
            message.error(error.message);
        });
    }
    return (
        <div>
            <HeaderRegister/>
            <div className="site-card-border-less-wrapper fondo-login" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Card className="BaseB cuadro-interno "  bordered={false}>
                        <p>
                            Ingrese el correo con el que se registro
                        </p>
                        <div>
                            <Form
                                name="basic"
                                initialValues={{remember: true}}
                                onFinish={handleChangePassword}

                            >
                                <Form.Item
                                    label="Email"
                                    name="usermail"
                                    rules={[{required: true, message: 'Porfavor ingrese sus datos'},{

                                        type:'email',message: 'Porfavor ingrese un correo válido'
                                    }]
                                    }
                                >
                                    <Input/>
                                </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                            Aceptar
                                        </Button>
                                        <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                            <Link to="/Login">Cancelar</Link>
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

export default PasswordReset;