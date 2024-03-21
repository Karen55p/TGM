import express from 'express';
import { main } from './models/index';

const { clienteRouter } = require('./routes/clienteRoute')
const { pedidoRouter } = require('./routes/pedidoRoute')
const app = express();
const port = 8001;

let b = '°o°'

app.use(express.json());
app.use(clienteRouter);
app.use(pedidoRouter);
app.use(main);

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}...`);
    console.log(b);
  });