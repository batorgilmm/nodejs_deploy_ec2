import { db } from "../util/database.js"

export const createUserTable = async (req, res) => {
    const queryText = `
        CREATE TABLE users (
            id uuid PRIMARY KEY default uuid_generate_v4(),
            username VARCHAR(50) UNIQUE,
            password TEXT
        )
    `
    const result = await db.query(queryText);

    console.log(result)

    return res.json(result)
}