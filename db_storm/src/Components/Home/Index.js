import './Home.css'
import Button from '../../Assents/Button';
import ComputadorGamer from '../../img/ComputadorGamer.png'
import Card from '../../Assents/Card';
import { useEffect, useState } from 'react';

export default function Body(){

    const [produtos, setProdutos] = useState([]);
    const fourSpace = [0, 1, 2, 3]

    useEffect(() => {
        fetchItens();
    }, []);

    async function fetchItens(){
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProdutos(data);
        }
        catch(error){
            console.log('Infelizmente não foi possível acessar os produtos! Erro:', error);
        };
    };


    return(
        <div className="Body">
            {SupBody()}
            <div className="segunda-metade-body">
                <h3 className="titulo-produtos">NOVOS PRODUTOS</h3>
                <div className="produtos">
                    <div className="fila">
                       {fourSpace.map((item, index) => (
                        <Card imagem={produtos[index]?.image} titulo={produtos[index]?.title} descricao={produtos[index]?.description.slice(0, 100) + '.'}/>
                       ))}
                    </div>

                    <div className="fila">
                        {fourSpace.map((item, index) => (
                        <Card imagem={produtos[index + 4]?.image} titulo={produtos[index + 4]?.title} descricao={produtos[index + 4]?.description.slice(0, 100) + '.'}/>
                       ))}
                    </div>

                    <div className="fila">
                        {fourSpace.map((item, index) => (
                        <Card imagem={produtos[index + 8]?.image} titulo={produtos[index + 8]?.title} descricao={produtos[index + 8]?.description.slice(0, 100) + '.'}/>
                       ))}
                    </div> 
                </div>
            </div>
        </div>
    );
}

function SupBody(){
    return(
        <div className="primeira-metade-body">
                <div className="banner">
                    <div className="anuncio-banner">
                        <p className="banner-titulo">SUPER PROMOÇÃO</p>
                        <p className="banner-subtitulo">40% de desconto</p>
                        <p className="banner-callToAction">Compre agora para obter as melhores ofertas</p>
                        <Button titulo={"Compre Agora"} className={'banner-button'} />
                    </div>
                    <div>
                        <img src={ComputadorGamer} className="foto-banner"/>
                    </div>
                </div>
            </div>
    );
}
   
    