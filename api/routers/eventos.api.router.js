import express from 'express'
import controller from '../controllers/eventos.api.controller.js'
import { validator } from '../middleware/tokenValidator.js'

const router = express.Router()

router.route('/')
.get(controller.findAll)
.post(controller.create)
.patch(controller.addPlayer)

// Eventos del usuario
router.route('/:idJ')
.get(controller.findById)
// Datos del Evento
router.route('/evento/:idE')
.get(controller.findEventById)
// Usuarios del Evento
router.route('/users/:idE')
.get(controller.findPlayerById)


export default router