// Importa la conexión a la base de datos 'pool' desde el archivo "../config/database/db.js"
import { pool } from "../config/database/db";
// Importa la función 'message' desde el archivo "../config/message.js"
import message from "../config/message";

// Controlador para crear un enlace
export const createLink = async (req, res) => {
    try {
        // Obtiene los datos del cuerpo de la solicitud (req.body)
        const { link } = req.body;

        // Realiza una consulta para insertar el enlace en la base de datos
        const result = await pool.query(
            `INSERT INTO links (nombre) VALUES (?)`,
            [link]
        );

        // Devuelve el resultado de la consulta en formato JSON
        res.json(result);
    } catch (error) {
        // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
        message(error.message, "danger");
        res.status(500).send(error.message);
    }
};

// Controlador para obtener todos los enlaces
export const findAllLinks = async (req, res) => {
    try {
        // Realiza una consulta para obtener todos los enlaces de la base de datos
        const [rows] = await pool.query(`SELECT * FROM links`);

        // Devuelve los enlaces en formato JSON
        res.json(rows);
    } catch (error) {
        // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
        message(error.message, "danger");
        res.status(500).send(error.message);
    }
};

// Controlador para obtener un enlace específico por su ID
export const findLink = async (req, res) => {
    try {
        // Obtiene el ID del enlace de los parámetros de la solicitud (req.params)
        const id = req.params.id;

        // Realiza una consulta para obtener el enlace con el ID especificado
        const [result] = await pool.query(
            `SELECT * FROM links WHERE idenlace = ?`,
            [id]
        );

        // Devuelve el enlace encontrado en formato JSON
        res.json(result[0]);
    } catch (error) {
        // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
        message(error.message, "danger");
        res.status(500).send(error.message);
    }
};

// Controlador para realizar un ping de prueba en la base de datos
export const pingLink = async (req, res) => {
    try {
        // Realiza una consulta para obtener un resultado de prueba de la base de datos
        const [result] = await pool.query(`SELECT "Hello world" as RESULT`);

        // Devuelve el resultado en la respuesta
        res.send(result[0]);
    } catch (error) {
        // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
        message(error.message, "danger");
        res.status(500).send(error.message);
    }
};

// Controlador para actualizar un enlace específico por su ID
export const updateLink = async (req, res) => {
    try {
        // Obtiene los datos del cuerpo de la solicitud (req.body)
        const {nombre, id} = req.body;
        // Realiza una consulta para actualizar el enlace con el ID especificado
        const result = await pool.query(
            `UPDATE links SET nombre = ?, WHERE idenlace = ?`,
            [nombre, id]
        );

        // Devuelve el resultado de la consulta en formato JSON
        res.json(result);
    } catch (error) {
        // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
        message(error.message, "danger");
        res.status(500).send(error.message);
    }
};

// Controlador para eliminar un enlace específico por su ID
export const deleteLink = async (req, res) => {
    try {
        // Obtiene el ID del enlace de los parámetros de la solicitud (req.params)
        const id = req.params.id;

        // Realiza una consulta para eliminar el enlace con el ID especificado
        const result = await pool.query(
            `DELETE FROM links WHERE idenlace = ?`,
            [id]
        );

        // Devuelve el resultado de la consulta en formato JSON
        res.json(result);
    } catch (error) {
        // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
        message(error.message, "danger");
        res.status(500).send(error.message);
    }
};
