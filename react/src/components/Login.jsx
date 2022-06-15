import {useState} from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormGroup, Container, Box } from '@mui/material';
import { useAuth } from '../context/Auth.Context';
// import * as API from '../api/auth.api'

function Login({ onLogin }) {
    // eslint-disable-next-line
    const { state, dispatch, login } = useAuth()
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")

    function onSubmit(e) {
        e.preventDefault()

        login(mail,pass)
        
    }

    return (
        <Container maxWidth="sm" className="mt-5">
            <Box>
                <FormGroup>
                    <TextField className="my-1" label="E-Mail" value={mail} onChange={(e) => { setMail(e.target.value) }} />
                </FormGroup>
                <FormGroup>
                    <TextField className="my-1" label="Password" type="password" value={pass} onChange={(e) => { setPass(e.target.value) }} />
                </FormGroup>

                <Button variant="outlined" onClick={(e) => onSubmit(e)}>Acceder</Button>
            </Box>
        </Container>    
    )
}

export default Login