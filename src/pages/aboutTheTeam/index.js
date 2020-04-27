import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import '../../global.css'

import voleiLogo from '../../images/voleiLogo.png';
import ifsul_field from '../../images/ifsul_field.jpg';
import ifsul_gym from '../../images/ifsul_gym.jpg';

export default function AboutTeam(){
  
    return(
       <div className="corpo">
         <header className="title">
           <img src={voleiLogo} width="100" alt="Volei Foto"/>

           <h1>Vôlei Masculino</h1>
         </header>

         
         <div className="main">

            <div className="msg">
              <text>Mudando a passagem <br/> de cada <br/> estudante.</text>
             
            </div>

            

          </div>

          
          
          <div className="galery">
                <h1>Our <br/> Spaces</h1>

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