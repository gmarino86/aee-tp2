import { conexion } from "./database.js"
import bcrypt from 'bcrypt'

async function login(mail, pass) {
    return await conexion(async function (db) {
        const user = await db.collection('user').findOne({ mail: mail })

        if(user){
            const validate = await bcrypt.compare(pass, user.pass)

            if(validate){
                return {
                    id: user._id,
                    name: user.name,
                    lastname: user.lastname,
                    mail: user.mail
                }
            }
            else{
                throw {error: 1000, msg: "El password no coincide."}    
            }
        }
        else{
            throw {error: 1000, msg: "El E-Mail no existe."}
        }

    })
}

async function register(user) {
    return await conexion(async function (db) {

        const userOld = await db.collection('user').findOne({ mail: user.mail })
        if (!userOld) {

            const salt = await bcrypt.genSalt(10)
            const pass = await bcrypt.hash(user.pass, salt)

            await db.collection('user').insertOne({
                name: user.name,
                lastname: user.lastname,
                mail: user.mail,
                pass: pass
            })
        }
        else{
            throw { error: 400, msg: "El usuario ya existe." } // dispara una excepcion
        }


    })
}

async function findAll(){
    return await conexion(async function (db) {
        return await db.collection('user').find().toArray()
    })
}

export default {
    login,
    register,
    findAll
}