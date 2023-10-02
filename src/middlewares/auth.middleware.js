import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config';

export const verifyToken = (req,res,next) => {

    const token = req.headers.authorization;
    if(!token) return next(new Error('No token provided'));

    try {
        const datoDescodificado = jwt.verify(token, JWT_SECRET)
        req.user = datoDescodificado.id
        console.log(datoDescodificado)
        next()
    } catch (error) {
        res.status(401).send({message: "Unauthorized"})
    }
    
}