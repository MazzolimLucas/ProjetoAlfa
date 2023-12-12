

export default function Button(props){

    return(
        <button className={'default-button ' + props.className}>{props.titulo}</button>
    )

}