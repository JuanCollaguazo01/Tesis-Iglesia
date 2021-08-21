import React, {useEffect, useState} from "react";
import {Card, Col, Input, Row, Comment, Tooltip, Button, Form, message} from "antd";
import '../styles/foro.css';
import HeaderForums from "../components/HeaderForums";
import Foot from "../components/Foot";
import moment from 'moment';
import {Link, useParams} from "react-router-dom";
import FIREBASE from "../firebase";
import  {avatars} from "../components/UserAvatar";

const Forum = () => {

    const {id} = useParams();
    const {uid} = useParams();
    console.log('id foro: ', id);
    console.log('id usuario: ', uid);

    const [dataForum, setDataForum] = useState({key: '',
        title: '',
        user: '',
        userId: '',
        date: '',
        message:'',
        avatar: '',
        comments: []
    });

    const [dataProfile, setDataProfile] = useState({key: '',
        address: '',
        email: '',
        name: '',
        phone:''
    });

    useEffect( () => {

        const getDataForum  = async () => {
            //console.log('dataListComments111: ', dataListComments);
            FIREBASE.db.ref(`forums/${id}`).on('value', (snapshot) => {
                console.log('snapshot', snapshot.val());
                const forum = snapshot.val();
                const forumId = snapshot.key;
                //console.log('snapshot.key: ', snapshot.key);
                const listCommentsData = [];
                const comments = forum.comments;
                for(let commentId in comments) {
                    const comment = comments[commentId];
                    listCommentsData.push({
                        key: commentId,
                        commentC: comment.comment,
                        nameC: comment.name,
                        dateC: comment.date,
                        userIdC: comment.userid,
                        avatarC: comment.avatar
                    });
                }

                const forumData = {key: forumId,
                    title: forum.title,
                    user: forum.name,
                    date: forum.date,
                    message:forum.message,
                    userId: forum.userid,
                    avatar: forum.avatar,
                    comments: listCommentsData,
                };
                console.log('forumdata', forumData);
                setDataForum(forumData);

            });
        };

        const getDataProfile  = async () => {
            FIREBASE.db.ref(`users/${uid}`).on('value', (snapshot) => {
                console.log('snapshotforoXD: ', snapshot.val());
                const profile = snapshot.val();
                const profileId = snapshot.key;
                const profileData = {key: profileId,
                    address: profile.address,
                    email: profile.email,
                    name: profile.name,
                    phone:profile.phone,
                    avatar: profile.avatar
                };
                //console.log('forumdata', forumData);
                setDataProfile(profileData);

            });
        };

        getDataProfile();
        getDataForum();
    }, []);

    const onFinish = async ( values ) => {
        //console.log('valores pasados al click ', values);
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        await FIREBASE.db.ref(`forums/${dataForum.key}/comments/`).push({
            comment: values.comment,
            date: date,
            name: dataProfile.name,
            avatar: dataProfile.avatar,
            userid: dataProfile.key
        });
        message.success('Los datos se actualizaron corectamente');
        document.querySelector('#contenedor-comen').value = "";
    };

    return (
        <div>
            <HeaderForums user={uid}/>

            <div className="fondo-foros">
                <div align="center">
                    <p className="tam-titu"><strong>Foros: {dataForum.title}</strong></p>
                    <div align="left">
                        <Card className="colorBaseB cuadro-datos " bordered={true}>
                            <Row gutter={24}>
                                <Col xs={24} sm={24} md={14} lg={16} span={1}>
                                    <Row gutter={24}>
                                        <Col xs={24} sm={24} md={24} lg={24} span={1}>
                                            <p className="tam-titu2"><strong>Autor: {dataForum.user}</strong></p>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col xs={24} sm={24} md={24} lg={24} span={1}>
                                            <p className="tam-titu2"><strong>Fecha: {dataForum.date}</strong></p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col align="center" xs={24} sm={24} md={8} lg={8} span={1}>
                                    <img
                                        alt="example"
                                        src={avatars[dataForum.avatar]} className="tam-imagen-dato-perfil"
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </div>


                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Reseña</strong></p>
                        <Card className="colorBaseB internal-box-size " bordered={true} align="left">
                            <h3> {dataForum.message}</h3>
                        </Card>
                    </Card>

                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Comentarios</strong></p>
                        <Card className="colorBaseB internal-box-size " bordered={true} align="left">
                            {
                                dataForum.comments.map((comment) => {
                                    return (
                                        <Comment
                                            author={<h2>{comment.nameC} </h2>}
                                            avatar={
                                                <img
                                                    alt="example"
                                                    src={avatars[comment.avatarC]}
                                                />
                                            }
                                            content={
                                                <p>{comment.commentC}</p>
                                            }
                                            datetime={
                                                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                                    <h4>{comment.dateC}</h4>
                                                </Tooltip>
                                            }
                                        />
                                    );
                                })
                            }
                        </Card>
                    </Card>

                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Agregar Comentario</strong></p>
                        <Card className="colorBaseB internal-box-size " bordered={true} align="left">
                            <Form name="nest-messages" onFinish={onFinish}>
                                <Form.Item name={['comment']}
                                           rules={[{required: true, message: 'Porfavor ingrese un comentario!'}]}>
                                    <Input.TextArea id="contenedor-comen"/>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Comentar
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Card>
                    <Button key="1" type="primary" className="posicion-btns">
                        <Link to={{
                            pathname: `/forosprincipal/${uid}`
                        }}>Regresar</Link>
                    </Button>
                </div>
            </div>
            <Foot/>
        </div>
    );
}

export default Forum;