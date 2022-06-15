import { createContext, useContext, useEffect, useState } from "react"
import { useParams } from "react-router"

export const JugadoresContext = createContext();

export function JugadorProvider(props) {

    const {id} = useParams();
    const [jugadores, setJugadores] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:9001/api/eventos/users/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setJugadores(data[0].jugadores)
        })
    // eslint-disable-next-line
    },[])

    return (
        <JugadoresContext.Provider value={{jugadores, setJugadores}}>
            {props.children}
        </JugadoresContext.Provider>
    
    )
}

export function useJugador() {
    const context = useContext(JugadoresContext)
    if (context === undefined){
        throw new Error("useJugador debe usarse con JugadorProvider")
    }
    return context
}