import dao from '../model/eventos.dao.js'

// AL SER UN API REST LA VISTA SIEMPRE ES JSON

export function findAll(req, res){
    dao.find()
    .then(function(evento){
        res.status(200).json(evento)
    })
    .catch(function(err){
        res.status(500).json(err)
    })
}

export function create(req, res){
    dao.insert(req.body)
    .then(function(evento){
        res.status(200).json(evento)
    })
    .catch(function(err){
        res.status(500).json(err)
    })
}

export function findById(req, res){
    // Le paso como parametros el idJ con el req.params. El dao tiene lafuncion que retorna la promesa.
    dao.findById(req.params)
    .then(function(evento){
        res.status(200).json(evento)
    })
    .catch(function(err){
        res.status(500).json(err)
    })
}
export function findEventById(req, res){
    dao.findEventById(req.params)
    .then(function(evento){
        res.status(200).json(evento)
    })
    .catch(function(err){
        res.status(500).json(err)
    })
}

export function addPlayer(req, res){
    dao.addPlayerDao(req.body)
    .then(function(evento){
        res.status(200).json(evento)
    })
    .catch(function(err){
        res.status(500).json(err)
    })
}

export function findPlayerById(req, res){
    // console.log("Controller",req.params)
    dao.findPlayerById(req.params)
    .then(function(evento){
        res.status(200).json(evento)
    })
    .catch(function(err){
        res.status(500).json(err)
    })
}

export default{
    findAll,
    create,
    findById,
    addPlayer,
    findEventById,
    findPlayerById
}