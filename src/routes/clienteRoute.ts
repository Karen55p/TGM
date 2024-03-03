import { Router } from "express";

const {clienteController} = require ('../controllers/clienteController')

const clienteRouter = Router();

clienteRouter.get('/clientes', clienteController.getCliente);
clienteRouter.post('/cliente', clienteController.createCliente);

module.exports = {
    clienteRouter,
};