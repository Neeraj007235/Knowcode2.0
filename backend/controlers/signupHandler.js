import { createUserSchema } from "../config.js"
import bcrypt from "bcrypt"
import { College } from "../models/collegeModel.js"

export const signupHandler = async (req, res) => {
    try {
        const result = createUserSchema.safeParse(req.body)

        if(!result.success){
            return res.status(400).json({
                msg: "Invalid inputs",
                error: result.error.message
            })
        }

        const { collegeName, email, contact, website, address, password, nssHead } = req.body

        const hashedPassword = await bcrypt.hash(password, 5)

        const college = await College.create({
            collegeName,
            email, 
            contact, 
            website,
            address, 
            password: hashedPassword, 
            nssHead
        })

        res.status(200).json({
            msg: "signup done",
            college
        })

    } catch (error) {
        res.status(500).json({
            msg: "Internal server error"
        })
        console.error("Error while signup", error)
    }
}

