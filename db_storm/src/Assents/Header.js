import './Assents.css'
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from 'react';

export default function Header(){

    let active = 'active';
    let disable = 'disable';
    const [homeRota, setHomeRota] = useState(active);
    const [sobreRota, setSobreRota] = useState(disable);
    const [contatoRota, setContatoRota] = useState(disable);

    function setClassHome(){
        setHomeRota(active);
        setSobreRota(disable);
        setContatoRota(disable);
    }

    function setClassSobre(){
        setHomeRota(disable);
        setSobreRota(active);
        setContatoRota(disable);
    }

    function setClassContato(){
        setHomeRota(disable);
        setSobreRota(disable);
        setContatoRota(active);
    }

    return(
        <div className="Header">
            <div className="sup-header">
                <Link to="/" onClick={setClassHome}><p>DB Storm</p></Link>
                <p className="white-space"></p>
                <p><Link to='/' className="carrinho-link" onClick={setClassHome}>Carrinho: </Link> 0 item(s)</p>
            </div>
            <div className="bottom-header">
                <div className="rotas-header">
                    <Link to="/" className={homeRota} onClick={setClassHome}><div><p>Home</p></div></Link>
                    <Link to="/Sobre" className={sobreRota} onClick={setClassSobre}><div><p>Sobre</p></div></Link>
                    <Link to="/Contato" className={contatoRota} onClick={setClassContato}><div><p>Contato</p></div></Link>
                </div>
                <div className="input-div-header">
                    <input
                    type="text" 
                    placeholder='pesquisar'/> 
                    <FaMagnifyingGlass className='lupa'/> 
                </div>
            </div>
        </div>
    );
}