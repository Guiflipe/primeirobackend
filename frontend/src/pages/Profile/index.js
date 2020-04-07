import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2, FiFilter} from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg'; //para importar imagens para a pagina de logon no caso
import api from '../../services/api';

export default function Profile(){
    const[incidents, setIncidents] = useState([]);
    const history = useHistory();

    //variaveis
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    

//buscando os casos da ong
    useEffect(()=> {
        api.get('profile',{
            headers: {
                Authorization: ongId,
            }
        }).then(response =>{
            setIncidents(response.data);
        })
    },[ongId]);

//excluindo um caso da aplicação web
    async function handleDeleteIncidents(id){
        try{
            await api.delete(`incidents/${id}`,{
            headers: {
                Authorization: ongId,
            }
        });
        setIncidents(incidents.filter(incident=> incident.id !== id));

        }catch(err){
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    //deslogar da sessão

    function hendleLogout(){
        localStorage.clear();
        history.push('/');
    }

    //html que aparece para o usuário
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem Vinda, {ongName}</span>

                <Link className="button" to='/incidents/new'>Cadastrar novo caso</Link>

                <button onClick={hendleLogout} type="button">
                    <FiPower size={18} color="#e02041"></FiPower>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident =>(
                    <li key={incident.id}>
                    <strong>Caso:</strong>
                        <p>{incident.title}</p>

                    <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                    <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button onClick={() =>handleDeleteIncidents(incident.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                ))}

              
            </ul>
        </div>

    );
}