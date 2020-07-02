import React, {useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import Menu from '../../topBar/index';

import './styles.css';
import './responsive-media.css';
import '../../topBar/stylesTopBar.css';

import ifDescriptionLogo from '../../images/ifDescriptionLogo.png';

const Register= () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    
    const history = useHistory();

   async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
        };
       
        try {
        await api.post('athletes', data);

        alert('Seu cadastro foi efetuado!');
        history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }
    }
    
    return(
<div className="corpo">

   <Menu />


        <div className="register-container">
           <div className="content">
                <section>
                    <img src={ifDescriptionLogo} alt="logo-ifsul"/>

                    <h1>Inscreva-se</h1>
                    <p>Faça sua inscrição e fique atento às datas de realização dos testes.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="E02041"/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleRegister} >
                    <input type="text" placeholder="Nome do estudante"
                    value={name}
                    onChange= {e => setName(e.target.value)}
                    />

                    <input type="email" placeholder="E-mail"
                     value={email}
                     onChange= {e => setEmail(e.target.value)}
                    />

                    <input type="text" placeholder="Whatsapp"
                     value={whatsapp}
                     onChange= {e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input type="text" placeholder="Cidade"
                         value={city}
                         onChange= {e => setCity(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
           </div>
       </div>
    </div>
    );
}

export default Register;