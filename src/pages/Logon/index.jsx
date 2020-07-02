import React, {useState} from 'react';
import api from '../../services/api';
import { login } from '../../services/auth';

import './styles.css';

import ifDescriptionLogo from '../../images/ifDescriptionLogo.png';
import heroes from '../../images/heroes.png';
import { useHistory } from 'react-router-dom';

const Logon = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    async function handleLogin(e){
        e.preventDefault();
         try{
             const response = await api.post('sessions', {email, password});

             localStorage.setItem('coachEmail', response.data.email);

             login(response.data.token);

             history.push('/teacher');
         } catch (err){
             alert('Nenhum treinador encontrado com este cadastro!');
         }
    }
    
    return(
        <>
            <container id="logon-container">
                <group id="form">
                    <img src={ifDescriptionLogo}/>
                    

                    <form id="logon-form" onSubmit={handleLogin}>
                        <h1>Faça seu login</h1>
                        <input placeholder="Seu e-mail"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        
                        <input placeholder="Sua senha"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button className="button" type="submit">
                            Entrar
                        </button>
                    </form>
                </group>

                <group>
                    <img src={heroes}/>
                </group>
            </container>
        </>
    );
}

export default Logon;