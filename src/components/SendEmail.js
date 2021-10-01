import React  from 'react';
import {Button, Card, Col, Form, Input, Row, message} from "antd";
import Divider from "antd/es/divider";
import emailjs from 'emailjs-com';
import ImgDirec from "../images/googleMaps.PNG";

const SendEmail =()=>{

    const handleSubmit = () =>{
        const email = document.querySelector('#sendEmailInfo_user_email').value;
        const title  = document.querySelector('#sendEmailInfo_user_subject').value;
        const info = document.querySelector('#sendEmailInfo_user_message').value;

        const contact = { userEmail:  email ,  emailTitle: title , emailDetails:  info  };

        //console.log("datos ", email + title + info );

         emailjs.send("Iglesia", "template_99mm9bu", contact, "user_dP2gJTXD1UptWZ59YXc8o"  )
             .then((response) => {
                 //console.log("SUCCESS!", response.status, response.text);
                 message.success('Se ha enviado su correo con éxito. ');
                 document.querySelector('#sendEmailInfo_user_email').value = "";
                 document.querySelector('#sendEmailInfo_user_subject').value = "";
                 document.querySelector('#sendEmailInfo_user_message').value = "";
             }, (err) => {
                 //console.log("FAILED...", err);
                 message.success('No se ha podido enviar su correo. Error:' + err );
             });
    }


    return(
      <div>

          {/*//Contactanos*/}

          <div >

              <div className="site-card-border-less-wrapper "  id="id-contact">
                  <Card className="colorBaseA" align="center" bordered={false} >
                      <div className="site-card-wrapper " >
                          <Divider orientation="center">Contáctanos</Divider>
                          Para recibir información detallada sobre las utilidades y servicios que ofrece nuestra página
                          pongase en contacto con nosotros enviando un correo electrónico, en el que se detalle sus inquietudes.
                          <Divider />
                          <Row gutter={16} align="center">
                              <Col xs={20} sm={20} md={10} lg={10}  span={8}>
                                  <a to="route" target="blank" href="https://www.google.com.ec/maps/place/Iglesia+de+Santa+Clara+de+San+Millan/@-0.2008627,-78.5022018,16z/data=!4m5!3m4!1s0x91d59a6a84509707:0x89be520ae2a35ade!8m2!3d-0.1996867!4d-78.4974002?hl=es-419"
                                   >
                                      <img
                                          style={{ width: '100%', height: '90%' }}
                                          alt="Imagen de la iglesia, y enlace a la dirección"
                                          src={ImgDirec}
                                      />
                                  </a>
                              </Col>
                              <Col xs={20} sm={20} md={12} lg={12}  span={8}>

                                  <Form name="sendEmailInfo"
                                        labelCol={{ span: 6 }}
                                        wrapperCol={{ span: 24 }}
                                        onFinish={ handleSubmit }>
                                    
                                    
                                      <Form.Item name={['user', 'email']} label="Email"
                                                 rules={[{
                                                     type: 'email',
                                                     required: true,
                                                     message: "Ingrese un correo electrónico" }]}>
                                          <Input placeholder="Ingrese su correo electrónico "/>
                                      </Form.Item>
                                      
                                      <Form.Item name={['user', 'subject']} label="Asunto"
                                                 rules={[{
                                                     required: true,
                                                     message: "Ingrese el asunto del correo"}]}>
                                          <Input  placeholder="Ingrese el asunto " name="subject"/>
                                      </Form.Item>

                                      <Form.Item name={['user', 'message']} label="Mensaje"
                                                 rules={[{
                                                     required: true,
                                                     message: "Ingrese el mensaje o petición que tenga"}]}>

                                          <Input.TextArea placeholder="Ingrese su mensaje "/>
                                      </Form.Item>
                                    
                                      <Form.Item >
                                          <Button type="primary" htmlType="submit" shape="round">
                                              Enviar
                                          </Button>
                                      </Form.Item>
                                  </Form>
                              </Col>
                          </Row>
                      </div>
                  </Card>
              </div>
          </div>
      </div>
    )

}

export default  SendEmail;
