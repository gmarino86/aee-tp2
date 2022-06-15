import jwt from 'jsonwebtoken'

// este es el middleware
export function validator(req, res, next){
    const token = req.header('auth-token')

    if(token){
        try{
            const datosUser = jwt.verify(token, "uG=AvS2iL;P423QZ52bl")
            req.user = datosUser
            next()
        }
        catch(err){
            return res.status(400).json({error: 400, msg: "Token no valido."})
        }
    }
    else{
        return res.status(400).json({error: 400, msg: "No envio el token."})
    }
}

export function generate(data){
    return jwt.sign(data, "uG=AvS2iL;P423QZ52bl")
}

export default {
    validator,
    generate
}