// Importa el módulo Router ledeleteLink Express
import { Router } from "express";
// Importa todas las funciones controladoras desde el archivo "../controllers/links.controller"
import * as controller from "../controllers/links.controller";

// Crea una instancia de Router
const router = Router();

// Ruta para crear un nuevo link
router.post('/enlace', controller.createLink);

// Ruta para obtener un link por su ID
router.get('/enlace/:id', controller.findLink);

// Ruta para realizar un ping de prueba en la base de datos
router.get('/ping', controller.pingLink);

// Ruta para obtener todos los link
router.get('/enlace', controller.findAllLinks);

// Ruta para actualizar un link por su ID
router.put('/enlace/:id', controller.updateLink);

// Ruta para eliminar un link por su ID
router.delete('/enlace/:id', controller.deleteLink);

// Exporta el enrutador como el valor predeterminado del módulo
export default router;