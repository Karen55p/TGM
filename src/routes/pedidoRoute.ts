import { Router } from "express";

const { pedidoController } = require('../controllers/pedidoController');

const pedidoRouter = Router();

pedidoRouter.get('/pedidos', pedidoController.getPedido);
pedidoRouter.post('/pedido', pedidoController.createPedido);
pedidoRouter.put('/pedidos/:id', pedidoController.updatePedido);
pedidoRouter.delete('/pedido/:id', pedidoController.deletePedido)

/*pedidoRouter.post('/pedido/:clienteId', pedidoController.createPedido);*/

module.exports = {
    pedidoRouter,
}