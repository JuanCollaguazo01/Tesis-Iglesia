import React from 'react';
import { Layout } from 'antd';
import Descriptions from "antd/es/descriptions";
import {WhatsAppOutlined, FacebookOutlined,TwitterOutlined} from '@ant-design/icons'
import ImgDirec from "../images/logo.svg";
const { Footer} = Layout;

const Foot = ( ) => {
    return (
        <div>
            <Footer  style={{ textAlign: 'center', paddingTop:15, paddingBottom:10,}}  >
                <Descriptions layout="vertical">
                    <Descriptions.Item label="Contáctanos" >0969045324<WhatsAppOutlined style={{width:25, height:25}}/></Descriptions.Item>
                    <Descriptions.Item label="Redes Sociales">
                        <a href="https://www.facebook.com/parroquiasanignaciodeloyola.solanda" ><FacebookOutlined style={{width:20, height:20}} /></a>
                        <a href="https://twitter.com/psanignacio?lang=es" ><TwitterOutlined style={{width:25, height:25}} /></a> </Descriptions.Item>
                    <Descriptions.Item label="Dirección ">
                        <a href="https://www.google.com/maps/place/Iglesia+Cat%C3%B3lica+San+Ignacio+de+Loyola+-+Solanda/@-0.2682568,-78.542168,17z/data=!3m1!4b1!4m5!3m4!1s0x91d598e901b455f7:0xed4e19d0ae826a4e!8m2!3d-0.2682568!4d-78.5399793"
                            >
                            <img
                                style={{ width: '20%', height: '20%' }}
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