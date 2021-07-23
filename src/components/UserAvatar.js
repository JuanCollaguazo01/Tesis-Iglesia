import {Col, Row, Radio, Button} from "antd";
import a1 from "../images/logo.svg";
import a2 from "../images/logo.svg";
import a3 from "../images/logo.svg";
import a4 from "../images/logo.svg";
import a5 from "../images/logo.svg";
import a6 from "../images/logo.svg";
import a7 from "../images/logo.svg";
import a8 from "../images/logo.svg";
import a9 from  '../images/logo.svg';
import a10 from  '../images/logo.svg';
import a11 from  '../images/logo.svg';
import a12 from  '../images/logo.svg';
import a13 from  '../images/logo.svg';
import a14 from  '../images/logo.svg';
import a15 from  '../images/logo.svg';
import a16 from  '../images/logo.svg';
import '../styles/bill.css';
import React, {useEffect, useState} from "react";
import Divider from "antd/es/divider";
import {RightOutlined} from "@ant-design/icons";
export const avatars={
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
    a13,
    a14,
    a15,
    a16,
};

const getAvatar=()=> {
    const avatarOptions = [];
    for (let avatarkey in avatars) {
        avatarOptions.push(
            {
                label: <img src={avatars[avatarkey]} alt='Imagen' height={100}/>,
                value: avatarkey
            }
        );
    }
    return avatarOptions;

}

const UserAvatar =( props )=>{

    const [ dataAvatar, setDataAvatar ] = useState( props.dataBill );

    useEffect( () => {
        console.log( 'Datos Avatar', props.dataBill);
    }, [ props.dataBill ] );

    const handleChooseAvatar = (e) => {
            setDataAvatar( prevState => {
                dataAvatar.avatarUser = e.target.value;
                return setDataAvatar(dataAvatar);
            })
            console.log("Avatar", dataAvatar);
        }
    return (
        <div>
                    <Row align={'middle'}>
                        <Col span={24}>
                            <Divider orientation="center">Elegir un avatar</Divider>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col span={24} >
                                    <Radio.Group className='avatar-b' options={getAvatar() }
                                                 optionType='button' onChange={handleChooseAvatar}/>
                                </Col>
                            </Row>
                        </Col>
                        <Divider orientation="center">
                            {
                                props.current < 2 && (
                                    <Button   style={{ margin: '0 8px' }} htmlType="submit" onClick={ props.onNext }>
                                        Siguiente <RightOutlined />
                                    </Button>
                                )
                            }
                        </Divider>
                    </Row>

        </div>

);
}
export default UserAvatar;