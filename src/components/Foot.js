import React from 'react';
import { Layout } from 'antd';
import Descriptions from "antd/es/descriptions";
import {PhoneOutlined, FacebookOutlined} from '@ant-design/icons'
import ImgDirec from "../images/googleMaps.PNG";
const { Footer} = Layout;

const Foot = ( ) => {
    return (
        <div>
            <Footer  style={{ textAlign: 'center', paddingTop:15, paddingBottom:10,}}  >
                <Descriptions layout="vertical">
                    <Descriptions.Item label="Contáctanos" >022225724<PhoneOutlined style={{width:25, height:25}}/></Descriptions.Item>
                    <Descriptions.Item label="Redes Sociales">
                        <a href="https://www.facebook.com/santaclarasm/" ><FacebookOutlined style={{width:40, height:40}} /></a></Descriptions.Item>
                    <Descriptions.Item label="Dirección ">
                        <a href="https://www.google.com.ec/maps/place/Iglesia+de+Santa+Clara+de+San+Millan/@-0.2008627,-78.5022018,16z/data=!4m5!3m4!1s0x91d59a6a84509707:0x89be520ae2a35ade!8m2!3d-0.1996867!4d-78.4974002?hl=es-419"
                            >
                            <img
                                style={{ width: '35%', height: '35%' }}
                                alt="example"
                                src={ImgDirec}
                            />
                        </a>
                    </Descriptions.Item>
                </Descriptions>
            </Footer>
            </div>
    );
};
export default Foot