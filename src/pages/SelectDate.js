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
                //console.log('snapshot', snapshot.val());
                const forumsData = [];
                snapshot.forEach( (data) => {
                    //  console.log('comment', data.val());
                    const forums = data.val();
                    
                    Object.keys(forums).forEach((key)=>{
                        //console.log(forums[key].day);
                        if(forums[key].userid === uid){
                            forumsData.push({                            
                            day: forums[key].day,
                            schedule: forums[key].schedule,
                            confirm: forums[key],                        
                        });
                        console.log(forums[key].day);
                        
                        };
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

    const { Search } = Input;


    const columns = [
        {
            title: 'Fecha',
            dataIndex: 'day',
            key: 'day',
        },
        {
            title: 'Hora',
            dataIndex: 'schedule',
            key: 'schedule',
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Asistencia',
            dataIndex: 'confirm',
            key: 'confirm',
            render: (elimina) => (
                <button  onClick={()=> console.log(elimina)  }>
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
