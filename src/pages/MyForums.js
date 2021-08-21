import React, { useState, useEffect} from 'react';
import { Card, Input, Table} from 'antd';
import '../styles/App.css';
import '../styles/forosprincipal.css';
import Foot from "../components/Foot";
import HeaderForums from "../components/HeaderForums";
import FIREBASE from "../firebase";
import {Link, useParams} from "react-router-dom";
import {normalizeString} from "./MainForum";



const MyForums = () => {
    
    const { uid } = useParams();
    console.log('pasar a mis foros',uid);
    const [dataForums, setDataForums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");


    useEffect( () => {
        const getDataComments  = async () => {
            FIREBASE.db.ref('forums').on('value', (snapshot) => {
                //console.log('snapshot', snapshot.val());
                const forumsData = [];
                snapshot.forEach( (data) => {
                    //  console.log('comment', data.val());
                    const forums = data.val();
                    const id = forums.userid;

                    if (id === uid){
                        forumsData.push({
                            key: data.key,
                            Titulo: forums.title,
                            Usuario: forums.name,
                            Fecha: forums.date,
                        });
                    }

                    //const names = [forum.name]
                    //console.log("holaaaa",names.filter(name => name.includes(uid.name)));
                });
                setDataForums(forumsData);
                setIsLoading(false);

            });
        };
        getDataComments();
    }, []);


    //console.log('dataForums',dataForums);

    const { Search } = Input;


    const columns = [
        {
            title: 'Fecha',
            dataIndex: 'Titulo',
            key: 'Titulo',
            render: (text, foro) =>  <Link to={{
                pathname: `/Foro/${foro.key}/${uid}`
            }}>
                {text}
            </Link>,
        },
        {
            title: 'Hora',
            dataIndex: 'Usuario',
            key: 'Usuario',
        },
        {
            title: 'Asistencia',
            dataIndex: 'Fecha',
            key: 'Fecha',
        },
    ];


    return (
        <div>

            <HeaderForums uid = {uid}/>

            <div className="fondo-foros">
                <div align="center">
                    <p className="tam-titu"><strong>Horarios</strong></p>
                    <Search className="tam-buscador" placeholder="Buscar" allowClear={true} onSearch={ value => setSearch(value)}
                    />
                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Horarios asistencia:</strong></p>
                        <Card className="colorBaseB internal-box-size " bordered={true} align="center">


                            <Table dataSource={  dataForums.filter((forums, index)=> normalizeString(forums.Titulo).includes(normalizeString(search))  ) }
                                   columns={ columns } loading={isLoading} />   

                        </Card>
                    </Card>
                </div>
            </div>
            <Foot/>
        </div>
    );
}


export default MyForums;
