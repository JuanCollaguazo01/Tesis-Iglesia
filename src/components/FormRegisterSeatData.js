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
                                    <Input  id="ra-identification-card" defaultValue={ props.dataUser.identificationCard }  placeholder="Ingrese su Cédula o Pasaporte" required/>
                                </Form.Item>
                                <Form.Item name="ra-name-user" label="Nombre">
                                    <Input defaultValue={ props.dataUser.nameUser } id="ra-name-user" placeholder="Ingrese su nombre" required />
                                </Form.Item>
                                <Form.Item name="ra-phone-user" label="Teléfono">
                                    <Input  defaultValue={ props.dataUser.phoneUser}  id="ra-phone-user" placeholder="Ingrese su teléfono" required/>
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