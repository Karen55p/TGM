import { Router } from "express";

const { pedidoController } = require('../controllers/pedidoController');

const pedidoRouter = Router();

pedidoRouter.get('/pedidos', pedidoController.getPedido);
pedidoRouter.post('/pedido', pedidoController.createPedido);

module.exports = {
    pedidoRouter,
}