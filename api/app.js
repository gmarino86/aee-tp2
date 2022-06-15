import express from 'express'
import routerApiEventos from './routers/eventos.api.router.js'
import routerApiAuth from './routers/auth.api.router.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
// Agrego el CORS
app.use(cors())


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Rutas
app.use('/api/eventos/', routerApiEventos)
app.use('/api/auth/', routerApiAuth)



app.listen(9001, function () {
    console.log("Server ON!")
    console.log("MongoDB HOST: ", process.env.NODE_MONGO_DB)
})
