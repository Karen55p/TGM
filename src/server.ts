import express, {request, response} from 'express';
import bodyparser from 'body-parser'

const app = express();
const port = 8001;

let aaaaaaaa = 'AHHHHHHHHHH'

app.use(express.json());
app.use(bodyparser);

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}...`);
    console.log(aaaaaaaa);
  });