import express from 'express';
import { main } from './models/index';
import { userRouter } from './routes/userRoute';
import { clienteRouter } from './routes/clienteRoute';
import { pedidoRouter } from './routes/pedidoRoute';
import { fileRouter } from './routes/fileRoute';
import cors from 'cors';

const app = express();
app.use(cors())
const port = 8001;

let b = `°O°`

app.use('/uploads', express.static('uploads'))

app.use(express.json());
app.use(clienteRouter);
app.use(pedidoRouter);
app.use(userRouter);
app.use(fileRouter);

app.use(main);

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}...`);
    console.log(b);
    //console.log(process.on('warning', e => console.warn(e.stack)));
  });