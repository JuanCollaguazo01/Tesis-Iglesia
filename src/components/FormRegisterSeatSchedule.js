import React  from "react";
import moment from 'moment';
import {Button, Card, DatePicker, Divider, Form} from "antd";
import '../styles/registrarAsiento.css';
import '../styles/App.css'
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const FormRegisterSeatSchedule = (props) =>{

    const handleReturnData = (value ) =>{
        const day = document.querySelector('#register-seat_ra-date').value;
        const schedule = document.querySelector('#select-schedule').value;
        props.onUpdateValues2( day, schedule);
            value && true ?
                 props.onNext()
                :props.onPrev();
    }


    let FirstSaturday  = moment().day(6);
    let FirstSunday  = moment().day(7);
    let NextSaturday  = moment().day(13);
    let NextSunday  = moment().day(14);
    const customDates = [
        FirstSaturday.format("YYYY-MM-DD"),
        FirstSunday.format("YYYY-MM-DD"),
        NextSaturday.format("YYYY-MM-DD"),
        NextSunday.format("YYYY-MM-DD") ];
    const disableDays = current => {
        return !customDates.includes(current.format('YYYY-MM-DD'));
    }

    return (
        <div>
            <div align="center">
                <Card className="form-sizes " bordered={true}>
                    <Divider orientation="center">Elegir horario</Divider>
                    <div>
                        <Form
                            name="register-seat"
                            onFinish={()=> handleReturnData(true)}
                        >
                            <Form.Item name="ra-date" label="Seleccionar día"
                                       rules={[{ required: true, message: 'Por favor seleccionar un día' }]}>
                                <DatePicker
                                    format="YYYY-MM-DD "
                                    disabledDate={ disableDays }
                                    placeholder={"Seleccionar día "}
                                />
                            </Form.Item>

                            <Form.Item
                                name="ra-select-schedule" label="Seleccionar horario"
                                hasFeedback
                                rules={[{ required: true, message: 'Por favor seleccionar un horario' }]}
                            >
                                <div className="content-select">
                                    <select id="select-schedule" >
                                        <option> </option>
                                        <option value='7:00:00'>7:00 - 9:00</option>
                                        <option value='10:00:00'>10:00 - 12:00</option>
                                        <option value='14:00:00'>14:00 - 16:00</option>
                                        <option value='18:00:00'>18:00 - 20:00</option>
                                    </select>
                                    <i></i>
                                </div>
                            </Form.Item>
                            <Divider dashed />
                            {props.current > 0 && (
                                    <Button shape="round" style={{ margin: '0 8px' }} onClick={ () => handleReturnData( false )}>
                                        <LeftOutlined /> Regresar
                                    </Button>
                            )}
                            {props.current < 3 && (
                                <Button type="primary" shape="round" htmlType="submit"  >
                                    Siguiente <RightOutlined />
                                </Button>
                            )}
                        </Form>
                    </div>
                </Card>
            </div>

        </div>


    );








}

export default FormRegisterSeatSchedule;