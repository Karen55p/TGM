import { Router } from "express";

const {clienteController} = require ('../controllers/clienteController')

const clienteRouter = Router();

clienteRouter.get('/clientes', clienteController.getCliente);
clienteRouter.post('/cliente', clienteController.createCliente);
clienteRouter.put('/cliente/:id', clienteController.updateCliente);
clienteRouter.delete('/cliente/:id', clienteController.deleteCliente);

module.exports = {
    clienteRouter,
};