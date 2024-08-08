import { db } from "../util/database.js"

export const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const queryText = `
            INSERT INTO users (username, password)
            VALUES ($1, $2) RETURNING *
        `
        const result = await db.query(queryText, [username, password])

        return res.json(result.rows[0])
    } catch (error) {
        console.log(error);
    }
}