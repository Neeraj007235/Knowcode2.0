import { secret, signInSchema } from "../config.js"
import { College } from "../models/collegeModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signinHandler = async (req, res) => {
    try {
        const result = signInSchema.safeParse(req.body)

        if(!result.success){
            return res.status(400).json({
                msg: "Invalid inputs",
                error: result.error.message
            })
        }

        const { email, password } = result.data

        const checkUser = await College.findOne({
            email
        })

        if(!checkUser){
            return res.status(400).json({
                msg: "invalid email"
            })
        }

        const checkPassword = await bcrypt.compare(password, checkUser.password)

        if(!checkPassword){
            return res.status(400).json({
                msg: "invalid password"
            })
        }

        const token = jwt.sign({
            userId: checkUser._id
        }, secret)

        res.status(200).json({
            msg: "sign done",
            token
        })

    } catch (error) {
        res.status(500).json({
            msg: "Internal server error"
        })
        console.error("Error while signup", error)
    }
}