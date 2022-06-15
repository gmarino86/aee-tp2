import mongodb from 'mongodb'
import { conexion } from './database.js'

export async function find() {
    return conexion(
        async function (db) {
            return await db.collection("eventos").find({}).toArray()
        }
    )
}

export async function insert(entity) {
    return conexion(
        async function (db) {
            await db.collection("eventos").insertOne(entity)
            return entity
        }
    )
}

export async function addPlayerDao(entity) {
    return conexion(async function (db) {
        return await db.collection("eventos").updateOne({ _id: mongodb.ObjectId(entity.idE) },{
            $push: {
                id_jugador : entity.idJ
            }
        })
    })
}

export async function findById(entity) {
    return conexion(async function (db) {
        return await db.collection("eventos").find({id_jugador : entity.idJ}).toArray()
    })  
}                   

export async function findEventById(entity) {
    return conexion(async function (db) {
        return await db.collection("eventos").find({ _id: mongodb.ObjectId(entity.idE) }).toArray()
    })  
}                   

export async function findPlayerById(entity) {
    return conexion(async function (db) {
        return await db.collection("jugadorEvento").find({ idE: mongodb.ObjectId(entity.idE) }).toArray()
    })  
}  

export default {
    find,
    insert,
    findById,
    findEventById,
    addPlayerDao,
    findPlayerById
}


