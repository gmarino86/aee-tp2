import React, { useEffect, useState } from 'react';
import DivEventList from './DivEventList/DivEventList'
import { useAuth } from '../context/Auth.Context'
import EventListItem from './DivEventList/EventListItem';

function Eventos(){
    const [ eventos, setEventos ] = useState()
    const auth = useAuth()

    useEffect(() => {
        fetch(`http://localhost:9001/api/eventos/${auth.state.user.id}`)
        .then(response => response.json())
        .then(events => {
            setEventos(events)
            console.log(eventos)
        })
        // eslint-disable-next-line
    },[])
    
    
    return (
        <div className="container">
            {     
                // eventos.map((evento) => (
                //     <EventListItem  key={evento._id} 
                //     _id={evento._id}
                //     dia={evento.dia} 
                //     hora={evento.hora} 
                //     titulo={evento.titulo}
                //     />
                // ))

            }                
        </div>
    )
}


export default Eventos