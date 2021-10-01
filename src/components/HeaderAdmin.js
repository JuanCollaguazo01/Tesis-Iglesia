import React from 'react';
import { Button, PageHeader} from 'antd';
import { Link} from "react-router-dom";
import '../styles/headerforos.css';
import FIREBASE from "../firebase";

const HeaderAdmin = ({ uid } ) => {

    //const [userUid, setUserUid] = useState( user.uid );
    //console.log('uid del usuario pasado a headerforos. Varable useestate:', uid);

    return (
        <div className='header2'>
            <PageHeader
                title='Iglesia Parroquial Santa Clara de San Millán'
                extra={[
                    <Button key="1" type="primary"  shape="round">
                        <Link to={{pathname: `/forosprincipal/${uid}`}}>
                            <p>Horarios Feligres</p>
                        </Link>
                    </Button>,
                    <Button key="2" type="primary"  shape="round">
                        <Link to={{pathname: `/misforosadmin/${uid}`}}>
                            <p>Mis Horarios</p>
                        </Link>
                    </Button>,
                    <Button key="3" type="primary"  shape="round">
                        <Link to={{pathname: `/perfiladmin/${uid}`
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

export default HeaderAdmin;
