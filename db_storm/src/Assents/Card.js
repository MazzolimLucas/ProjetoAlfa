

export default function Card(props){
    return(
        <div className="card">
            <div className="card-imagem">
                <img src={props.imagem} />
            </div>
            <div  >
                <p className="titulo-card">{props.titulo}</p>
                <p className="descricao-card">{props.descricao}</p>
                <button className="button-card">Comprar</button>
            </div>
        </div>
    )
}