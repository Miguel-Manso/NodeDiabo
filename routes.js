import express from 'express';
const routes = express.Router();

import { ClientController } from './src/Controllers/ClientController.js'


/*
routes.get("/", (req, res) => {
    return res.status(200).json({
        msg : "Routes funciona"
    })
});
*/

routes.get("/cliente", ClientController.listarTodos);
routes.post("/cliente/novo", ClientController.novoCliente);

export { routes }