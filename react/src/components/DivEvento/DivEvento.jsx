import DivEventoItem from './DivEventoItem'

function DivEvento(props) {
    return (
        <div>

        {props.item.map((evento) => (
            <DivEventoItem  key={evento._id} 
            _id={evento._id}
            dia={evento.dia} 
            hora={evento.hora} 
            titulo={evento.titulo}
            />
        ))}
        </div>
        
    )
}

export default DivEvento