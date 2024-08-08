import { db } from "../util/database.js";
import CryptoJS from "crypto-js"

export const signUp = async (req, res) => {
    try {
        let { username, password } = req.body;

        var ciphertext = await CryptoJS.AES.encrypt(password, process.env.PLAIN_TEXT).toString();

        const queryText = `
        INSERT INTO users (username, password)
        VALUES ($1, $2) RETURNING *
    `
        const result = await db.query(queryText, [username, ciphertext])

        return res.json(result.rows[0])


    } catch (error) {
        console.log(error)

        return res.json(error)
    }
}



export const login = async (req, res) => {
    try {
        const { username, password } = req.body

        const queryText = `
            SELECT * FROM users WHERE username=$1
        `

        const { rows } = await db.query(queryText, [username])

        const bytes = CryptoJS.AES.decrypt(rows[0].password, process.env.PLAIN_TEXT);

        const originalText = bytes.toString(CryptoJS.enc.Utf8);

        const isMatch = originalText == password

        if (!isMatch) {
            return res.json({ success: false, msg: 'Username or password wrong' })
        }

        return res.json({ success: isMatch, })


    } catch (error) {
        return res.json(error)
    }
}