import { Container, Paper } from "@mui/material"
import { Link } from "react-router-dom"


function EventListItem(props) {
    
    return (
        <Container maxWidth="sm">
            <Paper elevation={3}>
                <Link to={`/evento/${props._id}`} underline="none">
                    <p>{props.dia} {props.hora}hs</p>
                    <p>{props.titulo}</p>
                    <p>Lugar</p>
                </Link>
            </Paper>
        </Container>
    )
}
export default EventListItem