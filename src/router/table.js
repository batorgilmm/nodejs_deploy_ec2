import express from "express";
import { createUserTable } from "../controller/table.js";

const tableRouter = express.Router();

tableRouter.post('/user', createUserTable);

export { tableRouter }