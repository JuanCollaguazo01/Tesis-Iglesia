import React, {useEffect, useState} from "react";
import {Button, Card, Col, Divider, Form,  Radio, Row } from "antd";
import '../styles/registrarAsiento.css';
import moment from 'moment';
import FIREBASE from "../firebase";
import { RightOutlined, LeftOutlined} from "@ant-design/icons";

/** const { Option } = Select;


function handleChange( value,valu ){
//console.log("asas",value.value);
    if (value.value == 10){
        valu = {
            A1: "A1", A2: "A2", A3: "A3", A4: "A4", A5: "A5", 
            A6: "A6", A7: "A7", A8: "A8", A9: "A9", A10: "A10",
        };
    }
    if(value.value == 20){
        valu = {
            A1: "A1", A2: "A2", A3: "A3", A4: "A4", A5: "A5", 
            A6: "A6", A7: "A7", A8: "A8", A9: "A9", A10: "A10",
            B1: "B1", B2: "B2", B3: "B3", B4: "B4", B5: "B5", 
            B6: "B6", B7: "B7", B8: "B8", B9: "B9", B10: "B10",
        };
    }
    if(value.value == 30){
        valu = {
            A1: "A1", A2: "A2", A3: "A3", A4: "A4", A5: "A5", 
            A6: "A6", A7: "A7", A8: "A8", A9: "A9", A10: "A10",
            B1: "B1", B2: "B2", B3: "B3", B4: "B4", B5: "B5", 
            B6: "B6", B7: "B7", B8: "B8", B9: "B9", B10: "B10",
            C1: "C1", C2: "C2", C3: "C3", C4: "C4", C5: "C5", 
            C6: "C6", C7: "C7", C8: "C8", C9: "C9", C10: "C10",
        };
    }
    if(value.value == 40){
        valu = {
            A1: "A1", A2: "A2", A3: "A3", A4: "A4", A5: "A5", 
            A6: "A6", A7: "A7", A8: "A8", A9: "A9", A10: "A10",
            B1: "B1", B2: "B2", B3: "B3", B4: "B4", B5: "B5", 
            B6: "B6", B7: "B7", B8: "B8", B9: "B9", B10: "B10",
            C1: "C1", C2: "C2", C3: "C3", C4: "C4", C5: "C5", 
            C6: "C6", C7: "C7", C8: "C8", C9: "C9", C10: "C10",
            D1: "D1", D2: "D2", D3: "D3", D4: "D4", D5: "D5", 
            D6: "D6", D7: "D7", D8: "D8", D9: "D9", D10: "D10",
        };
    }
    if(value.value == 50){
        valu = {
            A1: "A1", A2: "A2", A3: "A3", A4: "A4", A5: "A5", 
            A6: "A6", A7: "A7", A8: "A8", A9: "A9", A10: "A10",
            B1: "B1", B2: "B2", B3: "B3", B4: "B4", B5: "B5", 
            B6: "B6", B7: "B7", B8: "B8", B9: "B9", B10: "B10",
            C1: "C1", C2: "C2", C3: "C3", C4: "C4", C5: "C5", 
            C6: "C6", C7: "C7", C8: "C8", C9: "C9", C10: "C10",
            D1: "D1", D2: "D2", D3: "D3", D4: "D4", D5: "D5", 
            D6: "D6", D7: "D7", D8: "D8", D9: "D9", D10: "D10",
            E1: "E1", E2: "E2", E3: "E3", E4: "E4", E5: "E5", 
            E6: "E6", E7: "E7", E8: "E8", E9: "E9", E10: "E10",
        };
    }
    //console.log("aaaa",valu);
    return valu;
}
*/

const seats={ 
    A1: "A1", A2: "A2", A3: "A3", A4: "A4", A5: "A5", 
    A6: "A6", A7: "A7", A8: "A8", A9: "A9", A10: "A10",
    B1: "B1", B2: "B2", B3: "B3", B4: "B4", B5: "B5", 
    B6: "B6", B7: "B7", B8: "B8", B9: "B9", B10: "B10",
    C1: "C1", C2: "C2", C3: "C3", C4: "C4", C5: "C5", 
    C6: "C6", C7: "C7", C8: "C8", C9: "C9", C10: "C10",
    D1: "D1", D2: "D2", D3: "D3", D4: "D4", D5: "D5", 
    D6: "D6", D7: "D7", D8: "D8", D9: "D9", D10: "D10",
    E1: "E1", E2: "E2", E3: "E3", E4: "E4", E5: "E5", 
    E6: "E6", E7: "E7", E8: "E8", E9: "E9", E10: "E10",
};

const getSeats=( availableSeats )=> {
    const seatsOptions = [];
    let search = null;
    for (let seatkey in seats) {
        search = availableSeats.filter( ( item ) => item.key  === seatkey ).map(() =>{
            return seatkey;
            }
            
        );
        
        //console.log("seat",seatkey);
        //console.log("search",search);
        seatkey == search ?
        
        seatsOptions.push(
            {
                label: seatkey ,
                value: seatkey,
                disabled: true,
                style: { margin: '8px' },
            }
            ):
            seatsOptions.push(
                {
                    label: seatkey ,
                    value: seatkey,
                    style: { margin: '8px' },
                }
            )
            
    }
    return seatsOptions;
}

const FormRegisterSeatChooseSeat = (props) =>{

    const massDate = moment( (props.dataUser.dayMass + props.dataUser.scheduleMass) , "YYYY-MM-DD h:mm:ss ").unix();
    const [ dataMasses, setDataMasses] = useState([]);
    const [ positionSeat, setPositionSeat ] = useState(null);

    useEffect( () => {
        const getMassess  = async () => {
            FIREBASE.db.ref('masses/' + massDate + '/').on('value', (snapshot) => {
                const massesData = [];
                snapshot.forEach( (data) => {
                    massesData.push({
                        key: data.key,
                    });
                });
                setDataMasses(massesData);
            });
        };
        getMassess();
    }, [ ]);


    const handleReturnData = ( value ) => {
        if(value === true) {
            props.onUpdateValues3( positionSeat );
            props.onNext();

        }else{
            props.onPrev();
        }
    }

    const handleChooseSeat = (e) => {
        setPositionSeat(e.target.value);
    }


    return (
        <div>
            <div  align="center">
                <Card className="form-sizes " bordered={true}>
                    <p> Usted ha seleccionado esta fecha: { props.dataUser.dayMass }</p>
                    <p> En el horario de las: {props.dataUser.scheduleMass }</p>
                    <div>
                        {
                        /**<div>
                        <Select
                            labelInValue
                            defaultValue={{ value: '10' }}
                            style={{ width: 120 }}
                            onChange={handleChange}
                        >
                            <Option value="10">10 personas</Option>
                            <Option value="20">20 personas</Option>
                            <Option value="30">30 personas</Option>
                            <Option value="40">40 personas</Option>
                            <Option value="50">50 persomas</Option>
                        </Select>
                        </div>*/
                        }
                        <Form
                            name="register-seat"
                            onFinish={ ()=> handleReturnData(true)}
                        >
                            <Row align={'middle'}>
                                <Col span={24}>
                                    <Divider orientation="center">Elegir posición según disponibilidad</Divider>
                                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                        <Col >
                                            <Form.Item name="ra-select-schedule"
                                                       hasFeedback
                                                       rules={[{ required: true, message: 'Por favor seleccionar una posición de asiento' }]}
                                            >
                                            <Radio.Group  options={ getSeats( dataMasses)}
                                                          optionType='button'
                                                          buttonStyle="solid"
                                                          onChange={ handleChooseSeat }/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Divider/>
                                </Col>
                            </Row>


                            {props.current > 0 && (
                                    <Button   shape="round" onClick={()=> handleReturnData(false)} >
                                        <LeftOutlined /> Regresar
                                    </Button>
                            )}
                            {props.current < 3 && (
                                <Button style={{ margin: '0 8px' }} type="primary" shape="round" htmlType="submit"  >
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

export default FormRegisterSeatChooseSeat;

