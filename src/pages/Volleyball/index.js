import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import './styles-hero_div.css';
import './styles-testimonials_div.css';
import '../../global.css';
import '../../topBar/stylesTopBar.css';

import Menu from '../../topBar';

import voleiLogo from '../../images/voleiLogo.png';
import ifsul_field from '../../images/ifsul_field.jpg';
import ifsul_gym from '../../images/ifsul_gym.jpg';
import ifsul_team from '../../images/ifsul_team.jpg';
import estudante from '../../images/estudante.png';
import ifsul_team2 from '../../images/ifsul_team2.jpg';


export default function AboutTeam(){
  
    return(
       <div className="corpo">
         
         <Menu />
         

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

                <Link to="/">
                  <button className="button" type="submit">
                          Inscreva-se
                  </button>
                </Link>
              </div>

              <div className="div-hero-container-image">
                <img
                src={ifsul_team2}
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