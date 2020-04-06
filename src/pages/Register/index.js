import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import './stylesAside.css';
import './stylesTopBar.css';

export default function Register(){
    
    return(
<div className="menu">
     
        <li><Link className="back-link" to="/AboutTheTeam">Conheça o time</Link></li>
        <li> <Link className="back-link" to="/">Conheça o time</Link> </li>
        <li> <Link className="back-link" to="/">Conheça o time</Link> </li>
        <li> <Link className="back-link" to="/">Conheça o time</Link> </li> 

<div className="aside_bar">

    <aside>
        <strong>Inscreva-se</strong>
        <form>
          <div className="input-block">
            <label htmlFor="nome">Nome</label>
            <input name="nome" id="nome"/>
          </div>
          
          <div className="input-block">
            <label htmlFor="email">E-mail</label>
            <input name="email" id="email"/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="telefone">Telefone</label>
              <input type="text" name="telefone" id="telefone" maxLength="15"/>
            </div>
            
            <div className="input-block">
              <label htmlFor="longitude">Idade</label>
              <input type="number" name="longitude" min="14" max="19" id="longitude"/>
            </div>
          </div>

          <button type="submit" on>Salvar</button>
        </form>
      </aside>
      
      <ul className="msg">
      
      <textbox className="tb_1">
      <span > _vá além <br/>das salas de aula.</span> 
      </textbox>
      
      <textbox className="tb_3">
      <span> _faça parte da<br/> história.</span> 
      </textbox>
      
      <textbox className="tb_4">
      <span> _junte-se<br/>às nossas 
      equipes.</span> 
      </textbox>
      </ul>

    </div>
    </div>
    );
}