import React from 'react';
import { Link } from 'react-router-dom';

import ifLogo from '../images/ifLogo.png';

const Menu = () => {
    return(
    <div className="menu">
         
        <li> <Link className="topBar-link" to="/">Home</Link> </li>
        <li> <Link className="topBar-link" to="/volleyball_team">Equipes</Link> </li>
        <li> <Link className="topBar-link" to="/register">Increva-se</Link> </li>
        <li> <Link className="topBar-link" to="/logon">Área do treinador</Link> </li>
                
        <group className="team_logo">
            <img src={ifLogo} width="25" alt="Volei Foto"/>

            <h1>Câmpus Camaquã</h1>
        </group>
         
        <div className="menu-overlay"></div>
    </div>
    );
};


export default Menu;