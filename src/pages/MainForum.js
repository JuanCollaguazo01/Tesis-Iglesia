import React, { useEffect, useState} from 'react';
import {Card, Input, Table} from 'antd';
import '../styles/App.css';
import '../styles/forosprincipal.css';
import Foot from "../components/Foot";
import HeaderForums from "../components/HeaderForums";
import {useParams} from "react-router-dom";
import FIREBASE from "../firebase";
import { KeyOutlined } from '@ant-design/icons';

export const normalizeString = ( string ) => (
    string
        .trim()
        .toLowerCase()
        .replace('á', 'a')
        .replace('Á', 'A')
        .replace('é', 'e')
        .replace('É', 'E')
        .replace('í', 'i')
        .replace('Í', 'I')
        .replace('ó', 'o')
        .replace('Ó', 'O')
        .replace('ú', 'u')
        .replace('Ú', 'U')
        .replace('ñ', 'n')
        .replace('Ñ', 'N')
);

const MainForum = () => {
    const { uid } = useParams();
      //console.log('pruebapasar',uid);
    const [dataListForums, setDataListForums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect( () => {
        const getDataListForums  = async () => {
                FIREBASE.db.ref('masses/'  + '/').on('value', (snapshot) => {
                //console.log('snapshot1', snapshot.val());
                const listForumsData = [];
                snapshot.forEach( (data) => {
                    
                    const forums = data.val();
                    const forumsId = data.key;
                    
                    let imp = forums;
                                      
                    listForumsData.push({
                        key: forumsId,
                        Titulo: imp,
                        //Usuario: forums.schedule,
                        //Fecha: forums.phone,                        
                    });
                    console.log('snapshot', imp);
                    
                });
                
                //console.log('comment', listForumsData);
                setDataListForums(listForumsData);
                setIsLoading(false);
            });
        };
        getDataListForums();
    }, []);

    //console.log('dataForums',dataListForums);

    const { Search } = Input;

    const columns = [
        {
            title: 'Tema',
            dataIndex: 'Titulo',
            key: 'Titulo',
           
        },
        {
            title: 'Autor',
            dataIndex: 'Usuario',
            key: 'Usuario',
        },
        {
            title: 'Fecha',
            dataIndex: 'Fecha',
            key: 'Fecha',
        },
    ];

    //<Table dataSource={ dataListForums.filter((forums, index)=> normalizeString(forums.Titulo).includes(normalizeString(search))  ) }
                                   //columns={ columns } loading={isLoading} />

    return (
        <div>
            <HeaderForums uid = {uid}/>

            <div className="fondo-foros">
                <div align="center">
                    <p className="tam-titu"><strong>Horarios</strong></p>
                    <Search className="tam-buscador" placeholder="Buscar" allowClear={true} onSearch={ value => setSearch(value)}
                    />
                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Horarios juan:</strong></p>
                        <Card className="colorBaseB internal-box-size " bordered={true} align="center">
                            
                        </Card>
                    </Card>
                </div>
            </div>
            <Foot/>
        </div>
    );
}

export default MainForum;