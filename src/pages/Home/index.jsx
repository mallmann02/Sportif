import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Menu from '../../topBar';
import heroLogo from '../../images/heroLogo.svg';
import teamPicture from '../../images/teamPicture.svg';
import teamPicture_fistball from '../../images/teamPicture_fistball.svg';
import voleiLogo from '../../images/voleiLogo.png';


const Home = () => {
    return(
        <>
            <Menu />
            
            <div id="hero">
                <div id="hero-presentation_group">
                    <img src={heroLogo} />
                    <p id="hero-presentation_group-text">Projeto disponiblizado pelo IFsul para incentivar a prática de esportes junto à passagem pelo ensino médio.</p>
                </div>
            </div>

            <div id="volleyball_div">
                <img className="sports_div-image" src={teamPicture}/>

                <container className="sports_info_card">
                    <h2><strong>Equipe Voleibol Masculino</strong></h2>
                    
                    <section className="sports_info_card-text">
                        <p>
                            Para quem mora em regiões ou cidades próximas a algum hub <br/><br/>
                            <strong>Interação online e presencial</strong> com a turma. veteranos e calouros.<br/> <br/>
                            Internet e <stong>ambiente de estudos da Trybe.</stong> <br/> <br/>
                            <strong>Presença diária</strong> no hub da trybe. <br/> <br/>
                            Duração aproximada de 12 meses com carga horária de 1500 horas.<br/> <br/>

                        </p>

                        <span>Segunda a sexta, das 14h às 20h.</span>
                    </section>
                    
                    <Link to="/register">
                        <button className="button">
                            Inscreva-se 
                        </button>
                    </Link>
                </container>
            </div>

            <div id="fistball_div">   
                <container className="sports_info_card-fist">
                    <h2><strong>Equipe Punhobol Masculino</strong></h2>
                    
                    <section className="sports_info_card-text">
                        <p>
                            Para quem mora em regiões ou cidades próximas a algum hub <br/><br/>
                            <strong>Interação online e presencial</strong> com a turma. veteranos e calouros.<br/> <br/>
                            Internet e <stong>ambiente de estudos da Trybe.</stong> <br/> <br/>
                            <strong>Presença diária</strong> no hub da trybe. <br/> <br/>
                            Duração aproximada de 12 meses com carga horária de 1500 horas.<br/> <br/>

                        </p>

                        <span>Segunda a sexta, das 14h às 20h.</span>
                    </section>
                    
                    <Link to="/register">
                        <button className="button">
                            Inscreva-se 
                        </button>
                    </Link>
                </container>

                <img className="sports_div-image" src={teamPicture_fistball}/>
            </div>
        </>
    );
}

export default Home;