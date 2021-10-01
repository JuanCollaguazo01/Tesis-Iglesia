import React from 'react';
import { Breadcrumb } from 'antd';
import '../styles/headerforos.css';
import { Link} from "react-router-dom";
import { useParams} from "react-router-dom";

const Breadcrumbs = () => {

    const { uid } = useParams();
    return (
        <div>
            <div className='headeradmin'>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to={{pathname: `/registerseatadmin/${uid}`}}>
                        <a>Reservar</a>
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to={{pathname: `/usuariosadmin/${uid}`}}>
                        <a>Eliminar Usuarios</a>
                    </Link>
                </Breadcrumb.Item>
                {
                //<Breadcrumb.Item>
                    //<Link to={{pathname: `/selectdate/${uid}`}}>
                        //<a>Seleccion Horario</a>
                    //</Link>
                //</Breadcrumb.Item>
                }
            </Breadcrumb>
            </div>  
        </div>
    );
}


export default Breadcrumbs;
