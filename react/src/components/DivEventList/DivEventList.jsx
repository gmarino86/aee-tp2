import EventListItem from './EventListItem'

function DivEventList(props) {
    console.log(props)
    return (
        <div>

        {props.items.map((evento) => (
            <EventListItem  key={evento._id} 
            _id={evento._id}
            dia={evento.dia} 
            hora={evento.hora} 
            titulo={evento.titulo}
            />
        ))}
        </div>
        
    )
}

export default DivEventList