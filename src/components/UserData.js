import React from 'react';
import {Form, Input, Button, message} from "antd";
import '../styles/bill.css';
import FIREBASE from "../firebase";
import {useHistory} from 'react-router-dom';


const UserData = (props) => {
    const history=useHistory();

    const handleKeepData = () =>{
        const name = document.querySelector('#userName').value;
        const email = document.querySelector('#userMail').value;
        const phone = document.querySelector('#userPhone').value;
        const address  = document.querySelector('#userAddress').value;
        props.onUpdateValues(name,email,phone,address);
    }
    const handleSubmit = async (values) => {
        try {
            const usercount = await FIREBASE.auth.createUserWithEmailAndPassword(values.userMail, values.userPassword);
            console.log('usuario',usercount)
            await FIREBASE.db.ref(`users/${usercount.user.uid}/`).set({
                address: values.userAddress,
                email: values.userMail,
                name: values.userName,
                phone: values.userPhone,
            });
            message.success('Datos Guardados')
            history.push("/login")
        } catch(error) {
            message.error(error.message)
        }
    }

    return(
        <div>
            <div className="form-User">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Email"
                        name="userMail"
                        rules={[{required: true},
                            {
                                type:'email',
                                message: "Ingresa un correo válido"}]}
                    >
                        <Input   id="userMail" placeholder="Ingrese su Correo" />

                    </Form.Item>
                    <Form.Item
                        label="Contraseña"
                        name="userPassword"
                        rules={[{required: true, message: 'Porfavor ingrese su contraseña!'}]}
                    >
                        <Input.Password id="password"/>
                    </Form.Item>
                    <Form.Item
                        label="Nombre y Apellido"
                        name="userName"
                        rules={[{required: true, message: 'Porfavor ingese su nombre !'}]}
                    >
                                <Input  id="userName" placeholder="Ingrese su nombre" />

                    </Form.Item>
                    <Form.Item
                        label="Dirección"
                        name="userAddress"
                        rules={[{required: true, message: 'Porfavor llene el campo'}]}
                    >
                                <Input  id="userAddress" placeholder="Ingrese su dirección" />


                    </Form.Item>
                    <Form.Item
                        label="Teléfono"
                        name="userPhone"
                        rules={[{required: true, message: 'Porfavor ingrese su teléfono'}]}
                    >
                        <Input  id="userPhone" placeholder="Ingrese su teléfono" />

                    </Form.Item>
                    
                    {
                        props.current < 2 && (
                            <Button type="primary"  style={{ margin: '0 8px' }} htmlType="submit" onClick={handleKeepData}>
                                Registrar
                            </Button>
                        )
                    }
                </Form>
            </div>
        </div>
    )
}
export default UserData;