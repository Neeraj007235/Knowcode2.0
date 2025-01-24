import jwt from "jsonwebtoken"
import { secret } from "../config.js"

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization
        if(!token){
            return res.status(400).json({
                msg: "token not found"
            })
        }

        const decoded = jwt.verify(token, secret)
        if(!decoded){
            return res.status(400).json({
                msg: "invalid token"
            })
        }

        req.userId = decoded.userId
        next()
    } catch (error) {
        return res.status(400).json({
            msg: "error in middleware"
        })
    }
}