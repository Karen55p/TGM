import { Router } from "express";

const { pedidoController } = require('../controllers/pedidoController');

const pedidoRouter = Router();

pedidoRouter.get('/pedidos', pedidoController.getPedido);
pedidoRouter.post('/pedido', pedidoController.createPedido);

/*pedidoRouter.post('/pedido/:clienteId', pedidoController.createPedido);*/

module.exports = {
    pedidoRouter,
}