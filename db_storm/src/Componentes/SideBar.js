import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function(){
    return(
        <div className="SideBar">
            <div className="categorias-titulo">
                <p>Categorias</p>
            </div>
            <div className="categorias">
                <div><IoIosArrowDown/><p>Celulares</p></div>
                <div><IoIosArrowDown/><p>Monitores</p></div>
                <div><IoIosArrowDown/><p>Notebook</p></div>
                <div><IoIosArrowDown/><p>Acessórios</p></div>
                <div><IoIosArrowDown/><p>Aplicativos</p></div>
                <div><IoIosArrowDown/><p>Câmeras</p></div>
                <div><IoIosArrowDown/><p>Tv's</p></div>
                <div><IoIosArrowDown/><p>Mouses</p></div>
                <div><IoIosArrowDown/><p>Teclados</p></div>
                <div><IoIosArrowDown/><p>Placas de vídeo</p></div>
                <div><IoIosArrowDown/><p>Processadores</p></div>
            </div>
        </div>
    )
}