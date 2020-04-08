import React, {useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import '../../topBar/stylesTopBar.css';

import ifLogo from '../../images/ifLogo.png';

export default function Register(){
    
    return(
<div className="menu">

        <li> <Link className="topBar-link" to="/">Home</Link> </li>
        <li> <Link className="topBar-link" to="/AboutTheTeam">Equipes</Link> </li>
        <li> <Link className="topBar-link" to="/">Increva-se</Link> </li>
        <li> <Link className="topBar-link" to="/">Conheça o time</Link> </li>

        <div className="register-container">
           <div className="content">
                <section>
                    <img src={ifLogo} width="450" alt="be the hero"/>

                    <h1>Inscreva-se</h1>
                    <p>Faça sua inscrição e fique atento às datas de realização dos testes.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="E02041"/>
                        Voltar para home
                    </Link>
                </section>

                <form >
                    <input placeholder="Nome do estudante"
                    
                    
                    />

                    <input type="email" placeholder="E-mail"
                    
                    />

                    <input placeholder="Whatsapp"
                    
                    />

                    <div className="input-group">
                        <input placeholder="Cidade"
                       
                        />

                        <input placeholder="Data nasc." 
                        style={{width: 122}}
                        
                        />
                    </div>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
           </div>
       </div>
    </div>
    );
}