import { Request, Response } from 'express';
import { insertFile } from '../models/fileModels'; 

import { Request as ExpressRequest } from 'express';

interface file {
    id: number;
    originalname: string;
    path: string;
}

interface MulterRequest extends ExpressRequest {
    file?: any;
  }

export class FileController {

    /*getSingleFile(req: Request, res: Response){
        const { id } = req.params
        selectFile().then((file) => {
            return res.sendFile(path.resolve(__dirname, file.path));

        })
    };*/

    createFile(req: MulterRequest, res: Response){
        if(req.file){
            const newFile: file = req.file;
            insertFile(newFile.originalname, newFile.path);
            console.log(req.file)
            res.send('Arquivo enviado com sucesso')
        } else {
            res.status(400).send('Arquivo não encontrado na requisição');
        }

    }
};
  