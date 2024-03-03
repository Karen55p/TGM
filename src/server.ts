import express, {request, response} from 'express';


const { clienteRouter } = require('./routes/clienteRoute')
const { pedidoRouter } = require('./routes/pedidoRoute')
const app = express();
const port = 8001;

let aaaaaaaa = 'AHHHHHHHHHH'

app.use(express.json());
app.use(clienteRouter);
app.use(pedidoRouter);

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}...`);
    console.log(aaaaaaaa);
  });