import React from 'react';
import { Button, PageHeader } from 'antd';
import { Link} from "react-router-dom";


const Header = () => {

    return (


        <div className='header'>
            <PageHeader
                title='Iglesia Parroquial Santa Clara de San Millán'
                extra={[
                    <a href="#id-ini"><Button type="link" ghost><Link to="/">Inicio</Link></Button></a>,
                    <a href="#id-about"><Button type="link" ghost>Sobre Nosotros</Button></a>,
                    <a href="#id-equipo"><Button type="link" ghost>Equipo</Button></a>,
                    <a href="#id-contact"><Button type="link" ghost>Contáctanos</Button></a>,

                    <Button key="2" className="separa-boton" type="primary" shape="round"  >
                        <Link to="/login">Iniciar Sesión</Link>
                    </Button>,
                    <Button key="1" className="separa-boton" type="primary" shape="round"  >
                        <Link to="/bill">Registrarse</Link>
                    </Button>,
                ]}
            >

            </PageHeader>

        </div>

    );



}

export default Header;