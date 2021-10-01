import React, { useEffect, useState } from 'react';
import { Card, Input, Table } from 'antd';
import '../styles/App.css';
import '../styles/forosprincipal.css';
import Foot from "../components/Foot";
import HeaderAdmin from "../components/HeaderAdmin";
import { useParams } from "react-router-dom";
import FIREBASE from "../firebase";
import Breadcrumb from "../components/Breadcrumbs";


export const normalizeString = (item) => {
    //console.log("item", item);
    return item
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
};

const MainForum = () => {
    const { uid } = useParams();
    //console.log('pruebapasar',uid);
    const [dataListForums, setDataListForums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getDataComments = async () => {
            FIREBASE.db.ref('masses').on('value', (snapshot) => {
                //console.log('snapshot', snapshot.val());
                const forumsData = [];
                const datos = snapshot.val();
                Object.keys(datos).forEach(( i) => {
                    //console.log('i', i);
                    const forums = datos[i];
                    //console.log("forums", forums);
                    Object.keys(forums).forEach((key) => {
                        //console.log("key", forums[key]);
                            forumsData.push({
                                key: i+'/'+key,
                                ...forums[key]
                            });
                            //console.log(forums); 
                    });
                    //const names = [forum.name]
                    //console.log("holaaaa",names.filter(name => name.includes(uid.name)));
                });
                //console.log(forumsData)
                setDataListForums(forumsData);
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
    //console.log('dataForums',dataListForums);



    const { Search } = Input;

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) =>  a.name.localeCompare(b.name),
            sortDirections: ['descend'],
        },
        {
            title: 'Cedula',
            dataIndex: 'identificationCard',
            key: 'identificationCard',

        },
        {
            title: 'Fecha',
            dataIndex: 'day',
            key: 'day',
            sorter: (a, b) =>  a.day.localeCompare(b.day),
        },
        {
            title: 'Hora',
            dataIndex: 'schedule',
            key: 'schedule',
        },
        {
            title: 'Asistencia',
            dataIndex: 'key',
            key: 'key',
            render: (key) => (
                <button onClick={() => ondeleted(key)}>
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
                        <p className="tam-titu2"><strong>Horarios {uid.name}</strong></p>
                        <Card className="colorBaseB internal-box-size " bordered={true} align="center">
                        <Table dataSource={ dataListForums.filter((forums, index)=> normalizeString(forums.name).includes(normalizeString(search))  ) }
                                   columns={ columns } loading={isLoading} />
                        </Card>
                    </Card>
                </div>
            </div>
            <Foot/>
        </div>
    );
}

export default MainForum;