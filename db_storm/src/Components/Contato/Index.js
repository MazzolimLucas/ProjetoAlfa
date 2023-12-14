import { useState } from 'react'
import Button from '../../Assents/Button';
import './Contato.css'


export default function Index(){    

    const [colorSelect, setColorSelect] = useState('input-opcoes-contato');

    function  setarColorSelect(){
        setColorSelect('input-opcoes-black-contato');
    }

    return(
        <div className="Contato">
            <h1 className="titulo-contato">Contato</h1>
            <p className='instrucao-uso-contato'>Preencha o formulário abaixo e clique em enviar</p>
            <p className='campos-obrigatorios-contato'>*Campos Obrigatórios</p>
            
            <div className='forms-contato'>
                <form method='post'>
                <input type='text' placeholder='*Nome' className='input-contato' required></input>
                <input type='text' placeholder='*Sobrenome' className='input-contato' required></input>
                <input type='email' placeholder='*E-mail' className='input-contato' required></input>
                <input type="tel" placeholder='Telefone' className='input-contato'></input>
                <input type='text' placeholder='Cidade' className='input-contato'></input>

                <select className={'input-contato ' + colorSelect} required placeholder='*Motivo' onChange={setarColorSelect}>
                <option>*Motivo</option> 
                <option>Reclamação</option> 
                <option>Elogio</option> 
                <option>Informação</option>  
                <option>Solicitação</option>
                <option>Sugestão</option>
                </select>

                <input type='' placeholder='*Mensagem' className='input-contato' required></input>

                <input type='checkbox' className='checar-requesitos-contato' id='checar-requesitos-contato'/> 
                <label for='checar-requesitos-contato' className='aceitar-informacoes-contato'>Aceito receber informações sobre notícias e promoções da DB Storm</label>

                <input type='checkbox' className='checar-politicas-contato' id='checar-politicas-contato' required/> 
                <label for='checar-politicas-contato' className='aceitar-politicas-contato'>Eu aceito as políticas de privacidade DB Storm</label>
                
                <Button titulo={'Enviar'} className={'submit-contato'} />

                </form>

            </div>

        </div>
    )

}
