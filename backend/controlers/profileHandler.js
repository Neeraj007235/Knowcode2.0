import { College } from "../models/collegeModel.js"


export const profileHanlder = async (req, res) => {
    try {
        const userId = req.userId

        const user = await College.findById(userId).select("-password")

        if(!user){
            res.status(400).json({
                msg: "user not found"
            })
        }

        res.status(200).json({
            user
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error"
        })
        console.error("Error while signup", error)
    }
}