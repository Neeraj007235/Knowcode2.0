import { Router } from "express";
import { signupHandler } from "../controlers/sigupHandler.js";
import { signinHandler } from "../controlers/signInHandler.js";
import { authMiddleware } from "../middlewares/auth.js";
import { profileHanlder } from "../controlers/profileHandler.js";

export const collegeRouter = Router()

collegeRouter.post("/signup", signupHandler)

collegeRouter.post("/signin", signinHandler)

collegeRouter.get("/profile", authMiddleware, profileHanlder)

// collegeRouter.post("/claim-task", taskHandler)

// collegeRouter.put("/complete-task", completeTaskHandler)

// collegeRouter.get("/profile", profileHandler)

// collegeRouter.post("/room", roomHandler)

// collegeRouter.post("/chat", chatChandler)