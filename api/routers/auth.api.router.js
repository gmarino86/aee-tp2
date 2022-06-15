import express from 'express'
import authController from '../controllers/auth.controller.js'
import { validator } from '../middleware/tokenValidator.js'

const route = express.Router()

route.post('/register', authController.register)
route.post('/login', authController.login)
route.get('/login', [validator], authController.getLogin)


route.get('/', [validator], authController.findAll)

export default route