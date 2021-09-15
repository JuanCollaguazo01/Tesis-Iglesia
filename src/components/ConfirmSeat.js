import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Descriptions, Divider, Row,  message, Popconfirm} from "antd";
import moment from "moment";
import FIREBASE from "../firebase";
import CreatePDF from "./CreatePDF";
import {LeftOutlined, CloseCircleOutlined, CheckCircleTwoTone  } from "@ant-design/icons";
import { useParams} from "react-router-dom";

const ConfirmSeat = (props) => {

    const massDate = moment( (props.dataUser.dayMass + props.dataUser.scheduleMass ) , "YYYY-MM-DD h:mm:ss ").unix();
    const [ dataMasses, setDataMasses] = useState([]);
    const [ saveSeat, setSaveSeat] = useState(true );
    const { uid } = useParams();

    useEffect( () => {
        const getMassess  = async () => {
            FIREBASE.db.ref('masses/' + massDate + '/').on('value', (snapshot) => {
                //console.log('comment', snapshot);
                const massesData = [];
                snapshot.forEach( (data) => {
                    const mass = data.val();
                    const massId = data.key;

                    massesData.push({
                        key: massId,
                        data: mass,
                        
                    });
                    //console.log('comment5555', mass);
                });
                setDataMasses(massesData);

            });
        };
        getMassess();
    }, [ ]);

    const handleVerifyUserSeat = ( identificationCard) =>{
        let values = null;
        values = dataMasses.filter( ( item, index ) => item.data.identificationCard  === identificationCard).map((item, i) =>{
                return "Registrado";
            }
        );
        if(values === "Registrado"){
            message.error('Usted ya ha registrado un asiento en este horario. ' +
                'Por favor ingresar un nuevo usuario con una cédula diferente');
        }else {
            setSaveSeat(false );
            handleSaveDataFirebase();
        }

    }


    const handleSaveDataFirebase = () =>{
            FIREBASE.db.ref('masses/' + massDate + '/'+ props.dataUser.seatMassUser ).set({
                name: props.dataUser.nameUser,
                phone: props.dataUser.phoneUser,
                identificationCard: props.dataUser.identificationCard,
                userid: uid,
                day: props.dataUser.dayMass,
                schedule: props.dataUser.scheduleMass,
            }, function(error) {
                if (error) {
                    message.error("No se ha podido registrar sus datos");
                } else {
                    message.success("Se han registrado sus datos");
                }
        });
    }



    return (
        <div>
            {
                saveSeat ?
                    <div   align="center">
                <Card className="form-sizes " bordered={true}>
                    <p>
                        Los datos registrados son:
                    </p>
                    <div>
                        <Divider dashed />
                        <Row gutter={16} align="center" >
                            <Col xs={24} sm={24} md={8} lg={8}  span={8}>
                                <div>
                                    <Descriptions
                                        column={{ xxl: 1, xl: 1, lg: 1 , md: 1, sm: 1, xs: 1 }}
                                    >
                                        <Descriptions.Item label="Nombre">
                                            { props.dataUser.nameUser }
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Cédula / Pasaporte">
                                            { props.dataUser.identificationCard }
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Teléfono">
                                            { props.dataUser.phoneUser }
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Horario">
                                            { props.dataUser.dayMass }
                                            { props.dataUser.scheduleMass}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Puesto">
                                            { props.dataUser.seatMassUser }
                                        </Descriptions.Item>
                                    </Descriptions>
                                </div>
                            </Col>
                            <Divider dashed />
                            {props.current > 0 && (
                                <Button  shape="round" onClick={ props.onPrev }>
                                    <LeftOutlined />  Regresar
                                </Button>
                            )}
                            <Popconfirm
                                title="Esta seguro de borrar los datos registrados"
                                onConfirm={ props.onCancel}

                                okText="Si"
                                cancelText="No"
                            >
                                <Button style={{ margin: '0 8px' }} type="primary" danger  shape="round" >
                                    <CloseCircleOutlined /> Cancelar
                                </Button>
                            </Popconfirm>

                            {props.current === 3 && (
                                <Button  style={{ margin: '0 8px' }} type="primary" shape="round"  htmlType="submit"
                                         onClick={ () => handleVerifyUserSeat( props.dataUser.identificationCard ) }>
                                    Registrar <CheckCircleTwoTone />
                                </Button>
                            )}
                        </Row>
                    </div>
                </Card>
            </div>
                :(
                        <CreatePDF  dataUser = { props.dataUser } />
                    )

            }
        </div>
    );

}

export default ConfirmSeat;