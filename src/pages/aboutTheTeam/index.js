import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import '../../global.css';
import '../../topBar/stylesTopBar.css';

import voleiLogo from '../../images/voleiLogo.png';
import ifsul_field from '../../images/ifsul_field.jpg';
import ifsul_gym from '../../images/ifsul_gym.jpg';
import ifsul_team from '../../images/ifsul_team.jpg';
import estudante from '../../images/estudante.png';


export default function AboutTeam(){
  
    return(
       <div className="corpo">
         
         
         <div className="menu">
         
          <li> <Link className="topBar-link" to="/">Home</Link> </li>
        <li> <Link className="topBar-link" to="/AboutTheTeam">Equipes</Link> </li>
        <li> <Link className="topBar-link" to="/">Increva-se</Link> </li>
        <li> <Link className="topBar-link" to="/">Conheça o time</Link> </li>
           
          <group className="team_logo">
           <img src={voleiLogo} width="50" alt="Volei Foto"/>

           <h1>Vôlei Masculino</h1>
          </group>
         
         <div className="menu-overlay"></div>
         </div>

         <div className="div-hero">
            <container className="div-hero-container">
              <div className="div-hero-container-text">
                
                <textbox className="div-hero-container-text-phrase">
                 <p>sua jornada de experiências no IF</p>  
                 <p className="div-hero-container-text-phrase-contrast">passa por aqui!</p>
                </textbox>
              

                <textbox className="div-hero-container-text-citation"> 
                  <p>
                  “A vontade de se preparar tem que ser maior do que a vontade de vencer. 
                  Vencer será consequência da boa preparação.”<br/><br/>
                  -Bernardinho
                  </p>
                </textbox>

                <button className="button" type="submit">
                        Inscreva-se
                </button>
              </div>

              <div className="div-hero-container-image">
                <img
                src={ifsul_team}
                />

              </div>

            </container> 

          </div>
         
         
         <div className="main">

            <div className="msg">
              <text>Mudando a passagem <br/> de cada <br/> estudante.</text>
             
            </div>

            <div className="div-testimonials">

              <container className="div-testimonials-container">

                <section className="div-testimonials-container-identification">
                  <img 
                  src={estudante}
                  />

                  <p className="div-testimonials-container-identification-name"> Aluno da Silva</p>

                  <p className="div-testimonials-container-identification-entryDate"> Ingressante de 2017 </p>
                </section>

                <section className="div-testimonials-container-testimony">
                  <p> "Sempre gostei de tecnologia desde pequeno e vendo a demanda do mercado atual, decidi que queria trabalhar na área. 
                   Acabei de sair do ensino médio técnico e vi na Trybe a oportunidade para me transformar em um ótimo profissional."</p>
                </section>


              </container>

              <container className="div-testimonials-container">

              </container>

              <container className="div-testimonials-container">

              </container>

            </div>
            

          </div>

          
          
          <div className="galery">
                <h1>Nossos <br/> Espaços</h1>

          <div className="places">

          <div className="field">
            
            <img
              src={ifsul_field}
              width="600"
             
            />

            <h1>Quadra Poliesportiva</h1>

          </div>

          <div className="gym">
            <img
              src={ifsul_gym}
              width="600"
              
            />

            <h1>Academia</h1>
          </div>
          </div>

          </div>
         
       </div>
    );
}