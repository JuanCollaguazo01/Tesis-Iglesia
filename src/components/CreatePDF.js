import React from 'react';
import {Button, Card, Col, Descriptions, Divider, Row, Space} from "antd";
import {Link} from "react-router-dom";
import { DownloadOutlined, HomeOutlined} from "@ant-design/icons";
import '../styles/createPdf.css';
import jsPDF from 'jspdf';
import { useParams} from "react-router-dom";


var QRCode = require('qrcode.react');


const PDF = (props) => {

    const handlegeneratePDF = () => {
        //cambiar imagen
        const imgData = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Horned_logo.jpeg'

        var doc = new jsPDF('p', 'pt');

        doc.addImage(imgData, 'JPEG', 240, 10, 120, 100)
        doc.setFontSize(30)
        doc.text('Iglesia San Ignacio de Loyola ', 100, 150, )

        doc.setFontSize(22)
        doc.text('Se han registrado los siguientes datos: ', 100, 190, )

        doc.setFontSize(16)
        doc.text('Nombre: ' +  props.dataUser.nameUser,40  , 220  )
        doc.setFontSize(16)
        doc.text('Cédula: ' + props.dataUser.identificationCard, 40, 240,  )
        doc.setFontSize(16)
        doc.text('Teléfono: ' + props.dataUser.phoneUser, 40, 260, )
        doc.setFontSize(16)
        doc.text('Día: ' + props.dataUser.dayMass, 40, 280,  )
        doc.setFontSize(16)
        doc.text('Horario: ' + props.dataUser.scheduleMass, 40, 300,  )
        doc.setFontSize(16)
        doc.text('Asiento: ' + props.dataUser.seatMassUser, 40, 320,  )
        doc.addImage(imgData, QRCode, 240, 10, 120, 100)
        doc.save('Asiento.pdf')
    }

    // const downloadQR = () => {
    //     const canvas = document.getElementById("123456");
    //     const pngUrl = canvas
    //         .toDataURL("image/png")
    //         .replace("image/png", "image/octet-stream");
    //     let downloadLink = document.createElement("a");
    //     downloadLink.href = pngUrl;
    //     downloadLink.download = "123456.png";
    //     document.body.appendChild(downloadLink);
    //     downloadLink.click();
    //     document.body.removeChild(downloadLink);
    // };
    const { uid } = useParams();
    
    


    return (
        <div>
            <Card className="form-sizes " bordered={true}>
                <h1> Iglesia Santa Clara de San Millán
                </h1>
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
                        <Col xs={24} sm={24} md={16} lg={16}  span={8} >
                            <Space align="center padding-btn-registrar" >
                                <QRCode
                                    id="code-seat-mass"
                                    value={ "Cedula : " +  props.dataUser.identificationCard + " Día: " + props.dataUser.dayMass + " Horario: " + props.dataUser.scheduleMass  }
                                    size={260}
                                    level={"H"}
                                />
                                {/*<Button> Descargar codigo qr en imagen</Button>*/}
                            </Space>
                        </Col>
                        <Divider dashed />
                    </Row>
                </div>
            </Card>

            <Button type="primary" shape="round"  onClick={ handlegeneratePDF }>
                <DownloadOutlined/> Guardar Ticket
            </Button>
            
            <Button shape="round" > <Link to={{pathname: `/misforos/${uid}`}}>Mis Horarios <HomeOutlined /></Link>  </Button>
        </div>
    );
}

export default PDF;