import { Request, Response } from 'express';
import { insertFile, selectFile } from '../models/fileModels'; 
import path from 'path';
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

    getSingleFile(req: Request, res: Response){
        const { id } = req.params;
        selectFile(id).then((file) => {
            console.log(file);
            if (file) {
                const fileUrl = `http://localhost:8001/uploads/${file.id}`;
                //res.sendFile(path.resolve(__dirname, file.path));
                res.json({ url: fileUrl });
            } else {
                res.status(404).send('Arquivo não encontrado');
            }
        });
    };

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
  