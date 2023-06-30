// Se importan los modulos necesarios
import app from './app';
import caseEntorno from './config/index.js';

// Inicia el servidor de la aplicación Express y lo hace escuchar en el puerto especificado
app.listen(app.get("PORT"), caseEntorno);
