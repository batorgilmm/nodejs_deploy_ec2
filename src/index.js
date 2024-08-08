import bodyParser from "body-parser";
import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import { tableRouter } from "./router/table.js";
import { userRouter } from "./router/user.js";
import { authRouter } from "./router/auth.js";

dotenv.config();

const app = express()
const PORT = 8000

app.use(bodyParser.json())
app.use(cors())

app.use('/table', tableRouter)
app.use('/user', userRouter)
app.use('/auth', authRouter)


app.get('/', (req, res) => {
    return res.send('hello world')
})

app.listen(PORT, () => {
    console.log('Server running')
})