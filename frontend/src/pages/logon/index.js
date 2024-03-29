import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import './styles.css'; // para importar o css de login

import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api';
import logoImg from '../../assets/logo.svg'; //para importar imagens para a pagina de logon no caso
import heroImgs from '../../assets/heroes.png';



export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('session', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }catch(err){
            alert('Falha no login, tente novamente.')
        }
    }
    
    return(
        
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="be the heroes"/>

            <form onSubmit={handleLogin} >
                <h1>Faça seu logon</h1>
                <input placeholder="Sua ID"
                value ={id}
                onChange={e => setId(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>
                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#e02041"/>
                    Não tenho cadastro</Link>
            </form>
            </section>
            <img src={heroImgs} alt="heroes"/>
        </div>
    );
}