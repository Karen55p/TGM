import { Router } from "express";
import { PedidoController } from "../controllers/pedidoController";

export const pedidoRouter = Router();

const pedidoController = new PedidoController();

pedidoRouter.get('/pedidos', pedidoController.getPedido);
pedidoRouter.post('/pedido', pedidoController.createPedido);
pedidoRouter.put('/pedidos/:id', pedidoController.updatePedido);
pedidoRouter.delete('/pedido/:id', pedidoController.deletePedido);