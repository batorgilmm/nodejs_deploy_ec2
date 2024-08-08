import express from "express"
import { login, signUp } from "../controller/auth.js"

const authRouter = express.Router()

authRouter.post('/signUp', signUp).post('/login', login)

export { authRouter }