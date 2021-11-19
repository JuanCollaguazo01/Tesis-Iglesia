import React  from "react";
import {Button, Card, Col, Form, Input, Row} from "antd";
import { RightOutlined  } from '@ant-design/icons';
import '../styles/registrarAsiento.css';


const FormRegisterSeatData = (props) =>{

    const handleReturnData = () =>{
        const nameUser = document.querySelector('#ra-name-user').value;
        const identificationCardUser = document.querySelector('#ra-identification-card').value;
        const phoneUser = document.querySelector('#ra-phone-user').value;
        props.onUpdateValues( nameUser, phoneUser, identificationCardUser);
        props.onNext();
    }

    return (
        <div>
            <div   align="center">
                <Card className="form-sizes " bordered={true}>
                    <Form
                        name="register-seat"
                        onFinish={ handleReturnData }
                    >
                        <Row gutter={16} align="center" >
                            <Col xs={24} sm={24} md={16} lg={16}  span={8}>
                                <Form.Item  name="ra-identification-card" label="Cédula / Pasaporte">
                                    <Input defaultValue={ props.dataUser.identificationCard } type="number" title="Escriba de nuevo la cédula/pasaporte"  id="ra-identification-card" placeholder="Ingrese su Cédula o Pasaporte" required/>
                                
                                </Form.Item>
                                <Form.Item name="ra-name-user" label="Nombre">
                                    <Input defaultValue={ props.dataUser.nameUser } type="text" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,} [a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,}" title="Escriba de nuevo el nombre y apellido" id="ra-name-user" placeholder="Ingrese un nombre y un apellido" required />
                                
                                </Form.Item>
                                <Form.Item name="ra-phone-user" label="Teléfono">
                                    <Input defaultValue={ props.dataUser.phoneUser} type="tel" pattern="[0-9]{7,10}" maxlength="10" title="Escriba de nuevo su teléfono" id="ra-phone-user" placeholder="Ingrese su teléfono" required/>
                                </Form.Item>
                            </Col>
                        </Row>
                        {props.current < 3 && (
                            <Form.Item >
                                <Button type="primary" shape="round"  htmlType="submit" >
                                    Siguiente <RightOutlined />
                                </Button>
                            </Form.Item>
                        )}
                    </Form>
                </Card>
            </div>
        </div>

    );
}

export default FormRegisterSeatData;