import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

export default function AboutTeam(){
    
    return(
        <div className="aboutTeam">
      <div className="about_sup">
        <h1>_Conheça nossas equipes</h1>
      </div>
      
      <div className="punhobol">
      <ul className="articles">
        <div className="equipe_apres">
        <h1 >PUNHOBOL</h1>
        <img
        className="punhoLogo"
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
      
        <article className="activity">
          <h1> Nossas atividades </h1>
        </article>
      
      </ul>
    </div>
    </div>  
    );
}