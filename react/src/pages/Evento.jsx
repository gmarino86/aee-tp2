import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Players } from "../components/DivEvento/DivListPlayers"
import { JugadorProvider } from "../context/EventoContexto"
import { BtnConvocatoria } from '../components/DivEvento/BtnConvocatoria.jsx'

function Evento(props) {
  
  const [evento, setEvento] = useState([])
  const {id} = useParams()

  // eslint-disable-next-line
  useEffect(() => {
    fetch(`http://localhost:9001/api/eventos/evento/${id}`)
    .then(response => response.json())
    .then(data => {
      setEvento(data)
    })
  // eslint-disable-next-line
  },[])
  
  return (
    <div>
      {
        evento.map(ev => (
          <div key={ev._id} className="container">
            <h2 className="text-center">{ev.titulo}</h2>

            <div className="row justify-content-between">
              <div className="col-6">
                <p>{ev.dia} {ev.hora} hs</p>
                <p>Lugar: {ev.lugar}</p>
                <p>Estado: {ev.estado = 1 ? "Se Juega" : "No se juega"}</p>
              </div>
              <div className="col-6">
                <p>Participantes: 1 de {ev.cantParticipantes}</p>
                <p>Deporte: {ev.deporte}</p>
              </div>
            </div>
            

            <JugadorProvider>
              <Players />
              <BtnConvocatoria evento={ev._id}></BtnConvocatoria>
            </JugadorProvider>
            
            
          </div>
        ))
      }
    </div>
  )
}

export default Evento