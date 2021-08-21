import React, {useEffect, useState} from 'react';
import { Card, Col, Row, Button } from 'antd';
import { useParams } from "react-router-dom";
import '../styles/App.css';
import '../styles/perfil.css'
import Foot from "../components/Foot";
import HeaderForums from "../components/HeaderForums";
import {Link} from "react-router-dom";
import FIREBASE from "../firebase";


const Profile = () => {

    const { uid } = useParams();
    //console.log('uid pasado a perfil: ',uid);

    const [dataProfile, setDataProfile] = useState({key: '',
        address: '',
        email: '',
        name: '',
        phone:''
    });


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
                //console.log('forumdata', forumData);
                setDataProfile(profileData);

            });
        };
        getDataProfile();
    }, []);

    //console.log('dataprofile', dataProfile);

    return (
        <div>
            <HeaderForums uid = {uid}/>
            <div className="fondo-foros">
                <div align="center">
                    
                    <p className="tam-titu"><strong>Perfil</strong></p>
                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Datos</strong></p>
                        <Card className="colorBaseB internal-box-size " bordered={true}>
                            <Row gutter={24}>
                                <Col xs={24} sm={24} md={18} lg={18} span={1}>
                                    <Row gutter={24}>
                                        <Col align="right" xs={24} sm={24} md={10} lg={10} span={1}>
                                            <p className="tam-titu2"><strong>Nombre:</strong></p>
                                        </Col>
                                        <Col xs={24} sm={24} md={10} lg={11} span={1}>
                                            <div className="div-datos-titulos-perfil">{ dataProfile.name }</div>
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col align="right" xs={24} sm={24} md={10} lg={10} span={1}>
                                            <p className="tam-titu2"><strong>Correo Electrónico:</strong></p>
                                        </Col>
                                        <Col xs={24} sm={24} md={10} lg={11} span={1}>
                                            <div className="div-datos-titulos-perfil">{ dataProfile.email }</div>
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col align="right" xs={24} sm={24} md={10} lg={10} span={1}>
                                            <p className="tam-titu2"><strong>Teléfono:</strong></p>
                                        </Col>
                                        <Col xs={24} sm={24} md={10} lg={11}span={1}>
                                            <div className="div-datos-titulos-perfil">{ dataProfile.phone }</div>
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col align="right" xs={24} sm={24} md={10} lg={10} span={1}>
                                            <p className="tam-titu2"><strong>Dirección:</strong></p>
                                        </Col>
                                        <Col xs={24} sm={24} md={10} lg={11} span={1}>
                                            <div className="div-datos-titulos-perfil">{ dataProfile.address }</div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={24} sm={24} md={5} lg={5} span={1} align="center">
                                    <Row gutter={24}>
                                        <Col xs={24} sm={24} md={24} lg={24} span={1}>
                                            <Button key="2" type="primary" className="posicion-btns">
                                                <Link to={{
                                                    pathname: `/actualizarperfil/${uid}`
                                                }}>Actualizar Datos</Link>
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col xs={24} sm={24} md={24} lg={24} span={1}>
                                            <Button key="1" type="primary" className="posicion-btns">
                                                <Link to={{
                                                    pathname: `/misforos/${uid}`
                                                }}>Regresar</Link>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Card>
                </div>
            </div>
            <Foot/>
        </div>
    );

}

export default Profile;
