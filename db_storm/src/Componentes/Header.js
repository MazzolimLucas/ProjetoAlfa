import React from "react";

export default function Header(){
    return(
        <div className="Header">
            <div className="sup-header">
                <a href="./App" className="logo"><p>DB Storm</p></a>
                <p className="white-space"></p>
                <p><a href="#">Carrinho: 0</a> item(s)</p>
            </div>
            <div className="bottom-header">
                <div className="rotas-header">
                    <div><p>Home</p></div>
                    <div><p>Sobre</p></div>
                    <div><p>Contato</p></div>
                </div>
                <div className="input-div-header">
                    <input
                    type="text" 
                    placeholder="Pesquisar"/>
                </div>
            </div>
        </div>
    )
}