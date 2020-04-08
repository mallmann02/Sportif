import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import '../../global.css'

export default function AboutTeam(){
    
    return(
       <div>
         <header className="title">
           <img src="" alt="Volei Foto"/>

           <h1>Vôlei Masculino</h1>
         </header>

         
         <div className="main">
            <img src="" alt="uniforme"/>

            
            <div className="msg">
              <group>
              <textbox>Novo uniforme de 2020</textbox>

              <textbox>Vista o manto.</textbox>              
              </group>


              <container>
                <header>
                  <img src="" alt="Aluno"/>

                  <h1>Virgílio Ramires</h1>
                  <h2>Tutor de E.F e treinador do time de vôlei</h2>
                </header>


              </container>
            </div>

            <div className="players">
              <group>
              <container>
                <header>
                  <img src="" alt="Aluno"/>

                  <h1>Aluno 1</h1>
                  <h2>Descrição aluno 1</h2>
                </header>


              </container>

              <container>
                <header>
                  <img src="" alt="Aluno"/>

                  <h1>Aluno 1</h1>
                  <h2>Descrição aluno 1</h2>
                </header>


              </container>
              </group>

              <group>
              <container>
                <header>
                  <img src="" alt="Aluno"/>

                  <h1>Aluno 1</h1>
                  <h2>Descrição aluno 1</h2>
                </header>


              </container>

              <container>
                <header>
                  <img src="" alt="Aluno"/>

                  <h1>Aluno 1</h1>
                  <h2>Descrição aluno 1</h2>
                </header>


              </container>
              </group>
            
            </div>


         </div>
       </div>
    );
}