import React, { useState, useEffect} from 'react';
import { Card, Input, Table} from 'antd';
import '../styles/App.css';
import '../styles/forosprincipal.css';
import Foot from "../components/Foot";
import HeaderAdmin from "../components/HeaderAdmin";
import FIREBASE from "../firebase";
import { useParams} from "react-router-dom";
import {normalizeString} from "./MainForum";
import Breadcrumb from "../components/Breadcrumbs";


const SelectDate = () => {
    
    const { uid } = useParams();
    const [dataForums, setDataForums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");


    useEffect( () => {
        const getDataComments  = async () => {
            FIREBASE.db.ref('masses').on('value', (snapshot) => {
                const forumsData = [];
                const datos = snapshot.val();
                Object.keys(datos).forEach(( i , a ) => {
                    //console.log('i', i);
                    const forums = datos[i];
                    //console.log("forums", forums);
                    Object.keys(forums).forEach((key) => {
                        //console.log("key", forums[key]);
                            forumsData.push({
                                id: a+1,
                                key: i+'/'+key,
                                ...forums[key]
                            });
                            //console.log(forumsData); 
                    });
                    //const names = [forum.name]
                    //console.log("holaaaa",names.filter(name => name.includes(uid.name)));
                });
                setDataForums(forumsData);
                setIsLoading(false);

            });
        };
        getDataComments();
    }, []);

    const ondeleted = (key) => {
        if (window.confirm("Estas seguro que deseas eliminar")) {
            //console.log('commentsss', key);
            FIREBASE.db.ref(`masses/${key}`).remove((err) => {
                if (err) {
                    window.confirm(err);
                } else {
                    window.confirm("Horario eliminado");
                }
            })
        }
    }
    const { Search } = Input;


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Fecha',
            dataIndex: 'day',
            key: 'day',
        },
        {
            title: 'Hora',
            dataIndex: 'schedule',
            key: 'schedule',
        },
        {
            title: 'Asistencia',
            dataIndex: 'confirm',
            key: 'confirm',
            render: (elimina) => (
                <button  onClick={()=> ondeleted(elimina)  }>
                  {"eliminar"}
                </button>
               ),
        },
    ];


    return (
        <div>

            <HeaderAdmin uid = {uid}/>
            <Breadcrumb/>
            <div className="fondo-foros">
                <div align="center">
                    <p className="tam-titu"><strong>Horarios</strong></p>
                    <Search className="tam-buscador" placeholder="Buscar" allowClear={true} onSearch={ value => setSearch(value)}
                    />
                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Horarios asistencia:</strong></p>
                        <Card className="colorBaseB internal-box-size " bordered={true} align="center">


                            <Table dataSource={  dataForums.filter((forums, index)=> normalizeString(forums.day||forums.day).includes(normalizeString(search))  ) }
                                   columns={ columns } loading={isLoading} />   

                        </Card>
                    </Card>
                </div>
            </div>
            <Foot/>
        </div>
    );
}


export default SelectDate;
