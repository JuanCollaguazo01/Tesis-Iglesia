import React, {useEffect, useState} from 'react';
import {Card, Button, Form, Input, message} from 'antd';
import {Link, useHistory, useParams} from "react-router-dom";
import '../styles/App.css';
import '../styles/perfil.css'
import Foot from "../components/Foot";
import HeaderForums from "../components/HeaderForums";
import FIREBASE from "../firebase";


const UpdateProfile = () => {

    const history=useHistory();
    const { uid } = useParams();
    //console.log('uid pasado a actualiar perfil: ',uid);

    const [dataProfile, setDataProfile] = useState(null);
    
    //console.log("dataBill",dataBill);

    useEffect( () => {
        const getDataProfile  = async () => {
            FIREBASE.db.ref(`users/${ uid }`).on('value', (snapshot) => {
                //console.log('snapshot', snapshot.val());
                const profile = snapshot.val();
                const profileId = snapshot.key;
                const profileData = {key: profileId,
                    address: profile.address,
                    email: profile.email,
                    name: profile.name,
                    phone:profile.phone
                };
                //console.log('profileData', profileData);
                setDataProfile(profileData);

            });
        };
        getDataProfile();
    }, [])



    const onFinish = async (values) => {
        //console.log('valores pasados al click perfil ', values);
        //console.log('id usuaruip perfil ', uid);
        //console.log('dataProfile-guardar: ', dataProfile);
        await FIREBASE.db.ref(`users/${ uid }`).set({
            address: values.address,
            name: values.name,
            phone: values.phone,
            email: dataProfile.email
        });
        message.success('Los datos del perfil se actualizaron corectamente');
        history.push(`/misforos/${uid}`)
    }


    

    //console.log('dataprofile', dataProfile);

    return (
        <div>
            <HeaderForums uid={uid}/>
            <div className="fondo-foros">
                {
                    dataProfile
                        ? <div align="center">
                            <p className="tam-titu"><strong>Actualizar Perfil</strong></p>
                            
                            <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                                <p className="tam-titu2"><strong>Datos</strong></p>

                                <Card className="colorBaseB internal-box-size " bordered={true}>
                                    <Form
                                        name="basic"
                                        labelCol={{ span: 8 }}
                                        wrapperCol={{ span: 24 }}
                                        initialValues={dataProfile}
                                        onFinish={onFinish}
                                        //onFinishFailed={onFinishFailed}
                                    >
                                        <Form.Item
                                            label="Nombre"
                                            name="name"
                                            rules={[{required: true, message: 'Porfavor ingrese el nombre!'}]}
                                        >
                                            <Input type="text" pattern="[a-zA-Z???????????????????????????? ,.'-]{3,64}" title="Escriba de nuevo el nombre" />
                                        </Form.Item>
                                        <Form.Item
                                            label="Direcci??n"
                                            name="address"
                                            rules={[{required: true, message: 'Porfavor ingrese su direcci??n!'}]}
                                        >
                                            <Input type="text" pattern="[a-zA-Z????????????????????????????-0-9 ,.'-]{3,64}"  title="Escriba de nuevo la direcci??n"/>
                                        </Form.Item>
                                        <Form.Item
                                            label="Tel??fono"
                                            name="phone"
                                            rules={[{required: true, message: 'Porfavor ingrese su tel??fono!'}]}
                                        >
                                            <Input type="tel" pattern="[0-9]{7,10}" maxlength="10" title="Escriba de nuevo su tel??fono" />
                                        </Form.Item>
                                        <Form.Item
                                            label="Correo Electr??nico"
                                            name="email"
                                            rules={[{required: true, message: 'Porfavor ingrese su tel??fono!'}]}
                                        >
                                            <Input disabled={true}/>
                                        </Form.Item>
                                        <Form.Item>
                                            <div align="center">
                                                <Button type="primary" htmlType="submit">
                                                    Guardar Cambios
                                                </Button>
                                            </div>
                                        </Form.Item>
                                    </Form>
                                    <div align="center">
                                        <Button key="1" type="primary" className="posicion-btns">
                                            <Link to={{
                                                pathname: `/perfil/${uid}`
                                            }}>Regresar</Link>
                                        </Button>
                                    </div>
                                </Card>
                            </Card>
                        </div>
                        : 'Cargando datos...'
                }
            </div>
            <Foot/>
        </div>
    );

}

export default UpdateProfile;
