import { useJugador } from "../../context/EventoContexto"


function PlayerItem(props) {
    return (
        <li key={props.j.id} className="list-group-item">{props.j.nombre} {props.j.apellido}</li>
    )
}

export function Players(){
    const { jugadores } = useJugador()
    return (
        <ol className="list-group list-group-numbered">
            {
                jugadores.map(j => (
                    <PlayerItem key={j.idJ} j={j}/>
                ))
            }
        </ol>
    )
}
