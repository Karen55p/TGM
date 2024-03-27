import express from 'express';
import { main } from './models/index';
import { userRouter } from './routes/userRoute';
import { clienteRouter } from './routes/clienteRoute';
import { pedidoRouter } from './routes/pedidoRoute';
import { fileRouter } from './routes/fileRoute';

const app = express();
const port = 8001;

let b = `°O°`

app.use(express.json());
app.use(clienteRouter);
app.use(pedidoRouter);
app.use(userRouter);
app.use(fileRouter);
app.use('/b', express.static('upload'));
app.use(main);

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}...`);
    console.log(b);
  });