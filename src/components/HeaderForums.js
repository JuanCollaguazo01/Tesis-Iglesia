import React from 'react';
import { Button, PageHeader} from 'antd';
import { Link} from "react-router-dom";
import '../styles/headerforos.css';
import FIREBASE from "../firebase";

const HeaderForums = ({ uid } ) => {

    //const [userUid, setUserUid] = useState( user.uid );
    //console.log('uid del usuario pasado a headerforos. Varable useestate:', uid);

    return (
        <div className='header2'>
            <PageHeader
                title='Iglesia Parroquial Santa Clara de San Millán'
                extra={[
                    <Button key="1" type="primary"  shape="round">
                        <Link to={{pathname: `/registerseat/${uid}`}}>
                            <p>Reservar</p>
                        </Link>
                    </Button>,
                    <Button key="2" type="primary"  shape="round">
                        <Link to={{pathname: `/misforos/${uid}`}}>
                            <p>Mis Horarios</p>
                        </Link>
                    </Button>,
                    <Button key="3" type="primary"  shape="round">
                        <Link to={{
                            pathname: `/perfil/${uid}`
                        }}>
                            <p className="tam-text">Perfil</p>
                        </Link>
                    </Button>,
                    <Button key="4" type="danger"  shape="round" onClick={()=>FIREBASE.auth.signOut()}>
                        Salir
                    </Button>,
                ]}
            >
            </PageHeader>

        </div>

    );



}

export default HeaderForums;






