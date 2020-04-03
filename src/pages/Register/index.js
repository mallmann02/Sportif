import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

export default function Register(){
    
    return(

<div className="aside_bar">
    <img 
    width="250"
    height="106,5"
    src="https://lh3.googleusercontent.com/proxy/mMltGHNDTQQvScA6eC4p2oCBtrsFF2y68EiZXxXg3x0W4fe9NIXKklQTYv6Eg1dbY70B9Jdsz9mFw-0oBX5TTvFDCX0yXE70qWyJNoF_I1I-Dv6NyOV6-TrDEAEvTy0SjAzVlXpJIhnfNnT_Z0PzHzIJeFoqgnTtKKcaZppQPnyFfg"
    />
   
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
      
      <ul>
      <article>
      <textbox className="tb_1">
      <span className="msg"> _vá além <br/>das salas de aula.</span> 
      </textbox>
      </article>
      
      <article>
      <textbox className="tb_3">
      <span className="msg"> _faça parte da<br/> história.</span> 
      </textbox>
      </article>

      <article>
      <textbox className="tb_4">
      <span className="msg"> _junte-se<br/>às nossas 
      equipes.</span> 
      </textbox>
      </article>
      </ul>

    </div>
    );
}