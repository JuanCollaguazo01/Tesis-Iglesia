import React from 'react';
import {Card, Col, Row, Button} from 'antd';
import '../styles/App.css';
import '../styles/inicio.css';
import ImgSobreNosotros1 from '../images/logo.svg';
import ImgSobreNosotros2 from '../images/logo.svg';
import ImgSobreNosotros3 from '../images/logo.svg';
import ImgEquipo1 from '../images/logo.svg';
import ImgEquipo2 from '../images/logo.svg';
import ImgEquipo3 from '../images/logo.svg';

import Meta from "antd/es/card/Meta";
import Divider from "antd/es/divider";
import {Link} from "react-router-dom";
import SendEmail from "../components/SendEmail";


const Inicio = () => {


    return (
        <div>


            {/*//Bienvenidos*/}
            <div >
                <div className="site-card-border-less-wrapper " >
                    <Card className="imagen-fondo-inicio" align="center" bordered={false} >
                        <div className="site-card-wrapper "  >
                            <Card className=" tamanio-cuadro"  bordered={false} style={{marginTop:95}}>
                                <div className="site-card-wrapper "  >
                                    <p>Bienvenidos</p>
                                    <p>  Ahora puede reservar un asiento para la ceremonia de la Eucaristia de la Iglesia Parroquial Santa Clara de San Millán,
                                        desde la comodidad de su hogar.  </p>
                                    <Button className="separa-boton" type="primary" shape="round"  >
                                        <Link to="/RegisterSeat">Registrar Asiento</Link>
                                    </Button>
                                </div>
                            </Card>
                        </div>


                    </Card>
                </div>
            </div>
            {/*//sobre Nosotros*/}

            <div >

                <div className="site-card-border-less-wrapper "  id="id-about">
                    <Card className="colorBase" align="center" bordered={false} >
                        <div className="site-card-wrapper "  >
                            <Divider orientation="center">Sobre Nosotros</Divider>
                            <Row gutter={16} align="center">
                                <Col xs={20} sm={20} md={8} lg={8}  span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img style={{ width: '40%', height: '100%', borderRadius: '50%'}}
                                                 alt="example"
                                                 src={ImgSobreNosotros1}
                                            />
                                        }
                                    >
                                        <Meta
                                            title="¿Qué Somos?"
                                            description="La iglesia tiene el objetivo de establecer una iglesia que sea acorde con el corazón de Dios para que los creyentes puedan servirse y proveerse mutuamente en las palabras de Dios y en el amor de Dios, obedecer y adorar a Dios Todopoderoso, Cristo de los últimos días, y convertirse en verdaderos testimonios para Dios."
                                        />
                                    </Card>
                                </Col>
                                <Col xs={20} sm={20} md={8} lg={8}  span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={ImgSobreNosotros2}
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Organización en la Iglesia"
                                            description="Debido a la situación actual que está atravesando el mundo entero, la Iglesia de la parroquia ha decidido realizar las ceremonias de una manera ordenada respetando el distanciamiento social que han propuesto las autoridades del área de la salud."
                                        />
                                    </Card>
                                </Col>
                                <Col xs={20} sm={20} md={8} lg={8} span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={ImgSobreNosotros3}
                                            />
                                        }
                                    >
                                        <Meta
                                            title="¿Por qué?"
                                            description="Nuestra tarea es clarificar lo que nos ha sido revelado por Dios desde los evangelios y que ha dejado en custodia para que lo sigamos enseñando a todas las generaciones hasta el fin de los tiempos. La familia cristiana, es la mayor y más perfecta imagen de Dios sobre la tierra."
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>


            </div>


            {/*// Equipo*/}

            <div >

                <div className="site-card-border-less-wrapper "  id="id-equipo">
                    <Card className="colorBase" align="center" bordered={false} >
                        <div className="site-card-wrapper " >
                            <Divider orientation="center">Equipo</Divider>
                            <Row gutter={16} align="center">
                                <Col xs={20} sm={20} md={8} lg={8}  span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={ImgEquipo1}

                                            />
                                        }
                                    >
                                        <Meta
                                            title="Hermana Josefina "
                                            description="Monja"
                                        />
                                    </Card>
                                </Col>
                                <Col xs={20} sm={20} md={8} lg={8}  span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={ImgEquipo2}
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Mons. Danilo Echeverría"
                                            description="Obispo"
                                        />
                                    </Card>
                                </Col>
                                <Col xs={20} sm={20} md={8} lg={8} span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={ImgEquipo3}
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Mons. David Israel de la Torre"
                                            description="Arzobispo "
                                        />
                                    </Card>


                                </Col>
                            </Row>
                        </div>


                    </Card>
                </div>


            </div>

            <SendEmail />
        </div>
    )

}

export default Inicio;