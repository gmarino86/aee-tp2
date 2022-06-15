// import { useJugador } from "../../context/EventoContexto"

export function BtnConvocatoria(props) {

    // const { jugadores } = useJugador()
    console.log(props.evento)

    return (
        <div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-outline-success" type="button">Participar</button>
                <button className="btn btn-outline-danger" type="button">No Participar</button>
            </div>
        </div>
    )
}
