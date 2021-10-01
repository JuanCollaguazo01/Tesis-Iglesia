import React from "react";
import { Card } from "antd";
import '../styles/registrarAsiento.css';
import '../styles/App.css';
import '../styles/forosprincipal.css';
import '../styles/foro.css';
import FormRegisterSeat from "../components/FormRegisterSeat";
import Foot from "../components/Foot";
import { useParams} from "react-router-dom";
import HeaderAdmin from "../components/HeaderAdmin";
import Breadcrumb from "../components/Breadcrumbs";


const RegisterSeatAdmin = () => {
    const { uid } = useParams();
    
   

    return (
        <div>
            <HeaderAdmin uid = {uid}/>
            <Breadcrumb/>
            <div className="site-card-border-less-wrapper background-register-seat" align="center">
                <Card className="colorBaseA big-card-size" bordered={true}>
                    <h2>Registrar Asiento</h2>
                    <Card className="colorBaseB internal-box-size " bordered={true}>
                        <p>
                            Ingrese sus datos para asignarle un asiento para la ceremonia en la Iglesia Santa Clara de San Millán, según
                            su disponibilidad de horario
                        </p>
                        
                        <FormRegisterSeat />

                    </Card>
                </Card>
            </div>
            <Foot />

        </div>
    );

}

export default RegisterSeatAdmin;