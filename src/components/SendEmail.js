import React  from 'react';
import {Button, Card, Col, Form, Input, Row, message} from "antd";
import Divider from "antd/es/divider";
import emailjs from 'emailjs-com';
import ImgDirec from "../images/ImgDirec.jpg";

const SendEmail =()=>{

    const handleSubmit = () =>{
        const email = document.querySelector('#sendEmailInfo_user_email').value;
        const title  = document.querySelector('#sendEmailInfo_user_subject').value;
        const info = document.querySelector('#sendEmailInfo_user_message').value;

        const contact = { userEmail:  email ,  emailTitle: title , emailDetails:  info  };

        console.log("datos ", email + title + info );

         emailjs.send("ProyectoIglesia", "template_0ndjb14", contact, "user_Ap5vRMMTcHBWzWwLe5KWm"  )
             .then((response) => {
                 console.log("SUCCESS!", response.status, response.text);
                 message.success('Se ha enviado su correo con éxito. ');
                 document.querySelector('#sendEmailInfo_user_email').value = "";
                 document.querySelector('#sendEmailInfo_user_subject').value = "";
                 document.querySelector('#sendEmailInfo_user_message').value = "";
             }, (err) => {
                 console.log("FAILED...", err);
                 message.success('No se ha podido enviar su correo. Error:' + err );
             });
    }


    return(
      <>

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
                                  <a href="https://www.google.com/maps/place/Iglesia+Cat%C3%B3lica+San+Ignacio+de+Loyola+-+Solanda/@-0.2682568,-78.542168,17z/data=!4m5!3m4!1s0x91d598e901b455f7:0xed4e19d0ae826a4e!8m2!3d-0.2682568!4d-78.5399793"
                                   target="_blank">
                                      <img
                                          style={{ width: '100%', height: '90%' }}
                                          alt="Imagen de la iglesia, y enlace a la dirección"
                                          src={ImgDirec}
                                      />
                                  </a>
                              </Col>
                              <Col xs={20} sm={20} md={12} lg={12}  span={8}>

                                  <Form name="sendEmailInfo"
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
                                          <Input placeholder="Ingrese el asunto "/>
                                      </Form.Item>
                                      <Form.Item name={['user', 'message']} label="¿Cómo podemos ayudarle?"
                                                 rules={[{
                                                     required: true,
                                                     message: "Ingrese el mensaje o petición que tenga"}]}>

                                          <Input.TextArea placeholder="Ingrese su mensaje "/>
                                      </Form.Item>
                                      <Form.Item >
                                          <Button type="primary" htmlType="submit">
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
      </>
    )

}

export default  SendEmail;
