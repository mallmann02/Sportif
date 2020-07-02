import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import { FiUsers } from 'react-icons/fi';

import './sidebar.css';
import './main.css';
import coachPhoto from '../../images/coach.jpg';

const Teacher = () =>{
    const [ athletes, setAthletes] = useState([]);
    const teacher_email = localStorage.getItem('coachEmail');
    
    useEffect(() => {
        async function loadAthletes(){
          const response = await api.get('/athletes');
      
          setAthletes(response.data);
        }
      
        loadAthletes();
      }, []);

    return(
        <div id="app">
        <aside>
            <div id="teacher-id">
                <container id="teacher-img">
                    <img src={coachPhoto} alt="imagem do professor"/>
                </container>

                <section id="teacher-info">
                    <strong>Leonardo Mallmann</strong>
                    <span>{teacher_email}</span>
                </section>
            </div>

            <div id="teacher-interactivity">
                <button> <FiUsers/> <text>Asigned Athletes</text></button>
                <button> <FiUsers/> <text>Asigned Athletes</text></button>
                <button> <FiUsers/> <text>Asigned Athletes</text></button>
                <button> <FiUsers/> <text>Asigned Athletes</text></button>
                <button> <FiUsers/> <text>Asigned Athletes</text></button>
            </div>
        
        </aside>
        
        
        <main>
            <ul>
            {athletes.map(athlete => ( 
            <li key={athlete.id} className="dev-item">
                <header>
                <div className="user-info">
                    <strong>{athlete.name}</strong>
                    <span>{athlete.email}</span>
                </div>
                </header>
            <p>Aluno Aluno Aluno Aluno Aluno Aluno Aluno Aluno Aluno Aluno Aluno Aluno</p>
            </li>
            ))}
            

            </ul>
        </main>
        </div>
    );
}

export default Teacher;