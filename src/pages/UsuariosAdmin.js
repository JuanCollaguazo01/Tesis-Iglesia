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


const UsuariosAdmin = () => {
    
    const { uid } = useParams();
    //console.log('pasar a mis foros',uid);
    const [dataForums, setDataForums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");


    useEffect( () => {
        const getDataComments  = async () => {
            FIREBASE.db.ref(`users`).on('value', (snapshot) => {
                //console.log('snapshot', snapshot.val());
                const dataResponse = snapshot.val();
                let forumsData = [];
                if (dataResponse) {
                forumsData = Object.keys(dataResponse).map(key => ({key, ...dataResponse[key]}));
                }
                setDataForums(forumsData);
                setIsLoading(false);

            });
        };
        getDataComments();
    }, []);

const ondeleted = (key) =>{
    if (window.confirm("Estas seguro que deseas eliminar este usuario")){
        FIREBASE.db.ref(`users/${key}`).remove((err)=>{
            if(err){
                window.confirm(err);
            }else{
                window.confirm("Usuario eliminado");
            }
        })
    }
}


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
            title: 'Correo',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Dirección',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Telefono',
            dataIndex: 'phone',
            key: 'phone',
        },
        //{
            //title: 'Editar',
            //dataIndex: 'editar',
            //key: 'editar',
           
        //},
        {
            title: 'Eliminar',
            dataIndex: 'key',
            key: 'key',
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
                    <p className="tam-titu"><strong>Usuarios</strong></p>
                    <Search className="tam-buscador" placeholder="Buscar" allowClear={true} onSearch={ value => setSearch(value)}
                    />
                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Usuarios Feligreses:</strong></p>
                        <Card className="colorBaseB internal-box-size " bordered={true} align="center">
                            <Table dataSource={  dataForums.filter((forums, index)=> normalizeString(forums.name).includes(normalizeString(search))  ) }
                                   columns={ columns } loading={isLoading} />   

                        </Card>
                    </Card>
                </div>
            </div>
            <Foot/>
        </div>
    );
}

export default UsuariosAdmin;
