import React from 'react';
import { Button, PageHeader } from 'antd';
import { Link} from "react-router-dom";


const HeaderRegister = () => {

    return (

    <header className="header">
        <div className='header'>
            <PageHeader
                title='Iglesia Parroquial Santa Clara de San Millán'
                extra={[
                    <a href="#id-ini"><Button type="link" ghost><Link to="/">Inicio</Link></Button></a>,

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

        </header>
    );



}

export default HeaderRegister;