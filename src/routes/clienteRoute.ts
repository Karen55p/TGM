import { Router } from "express";
import { ClienteController } from "../controllers/clienteController";

export const clienteRouter = Router();

const clienteController = new ClienteController();

clienteRouter.get('/clientes', clienteController.getCliente);
clienteRouter.post('/cliente', clienteController.createCliente);
clienteRouter.put('/cliente/:id', clienteController.updateCliente);
clienteRouter.delete('/cliente/:id', clienteController.deleteCliente);