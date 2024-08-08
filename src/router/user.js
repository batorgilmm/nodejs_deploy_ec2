import express from "express"
import { createUser } from "../controller/user.js"

const userRouter = express.Router()

userRouter.post('/', createUser)

export { userRouter }