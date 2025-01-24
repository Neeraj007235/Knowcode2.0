import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { collegeRouter } from "./routes/college.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1/college", collegeRouter)

const main = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/NSS")
        console.log("connected to db")
        app.listen(3000)
    } catch (error) {
        console.error("error while connecting to db")
    }
    
}

main()

