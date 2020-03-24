import React, { useState, Component } from 'react';
import {cpfMask} from './services/ddd_mask'

import './css/topBar.css'
import './css/sideBar.css'
import './css/App.css'
import './css/global.css'
import './css/about.css'
import './css/bewithus.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { id_telefone: '' }
    this.handlechange = this.handlechange.bind(this)
  }

  handlechange(e) {
    this.setState({ id_telefone: cpfMask(e.target.value) })
  }
  
  render() {
    const { id_telefone } = this.state
  return (
   <div className="App">
    
    <div id="top_bar">
    <nav>
        <ul className="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre o time</a></li>
              <li><a href="formPage.html">Inscreva-se</a></li>
              <li><a href="#">Links</a></li>
              <li><a href="#">Contato</a></li>                
      </ul>
      </nav> 
</div>
  
  
  <div id="aside_bar">
    
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
              <input type="text" name="telefone" id="telefone" value={id_telefone} maxLength="15" onChange={this.handlechange}/>
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
      <textbox id="tb_1">
      <span className="msg"> _vá além <br/>das salas de aula.</span> 
      </textbox>
      </article>
      
      <article>
      <textbox id="tb_3">
      <span className="msg"> _faça parte da<br/> história.</span> 
      </textbox>
      </article>

      <article>
      <textbox id="tb_4">
      <span className="msg"> _junte-se<br/>às nossas 
      equipes.</span> 
      </textbox>
      </article>
      </ul>

    </div>



    <div id="aboutTeam">
      <div id="about_sup">
        <h1>_Conheça nossas equipes</h1>
      </div>
      
      <div id="punhobol">
      <ul className="articles">
        <div id="equipe_apres">
        <h1 >PUNHOBOL</h1>
        <img
        id="punhoLogo"
        src="https://lh3.googleusercontent.com/proxy/BvlaSzDVKiEgiGh7CsoKmZAyAXf4gXjzSe8IbtVPkcNdrnEKpI4itXtPzqk7HqTYxSCHaF1JDHI5IEnuvOiO9-85SDfveBfxP4YPLq3o"
        data-noaft="1"

        />
        </div>

        <article>
         <div>
            <img
            src="https://qualificaifsul.com.br/imagens/tales_amorim_background.png"
            width="70"
            height="70"/>
          
            <h1>Prof. Tales Amorim</h1>
            <h2>Diretor geral e treinador da equipe</h2>
          </div>
          
          <div>
            <p>
            "kkkkkkdsjdsndjsdnjsnd<br/>dfsdfsdfssdfsfsfssss"
            </p>    
          </div> 
         </article>
      
        <article id="activity">
          <h1> Nossas atividades </h1>
        </article>
      
      </ul>
    </div>
    </div>  

    </div>

  );
}
}
export default App;
