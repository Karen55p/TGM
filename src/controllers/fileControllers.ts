import { Request, Response } from 'express';
import { insertFile,
    selectFile,
    deleteFile } from '../models/fileModels'; 

import { Request as ExpressRequest } from 'express';

interface file {
    id: number;
    originalname: string;
    path: string;
    //id_pedido: number;
};

interface MulterRequest extends ExpressRequest {
    file?: any;
  };

export class FileController {

    getSingleFile(req: Request, res: Response){
        const { id } = req.params;
        selectFile(id).then((file) => {
            console.log(file);
            if (file) {
                const fileUrl = `http://localhost:8001/uploads/${(file.originalname)}`;
                res.json({ url: fileUrl });
            } else {
                res.status(404).send('Arquivo não encontrado');
            };
        });
    };

    createFile(req: MulterRequest, res: Response){
        if(req.file){
            const newFile: file = req.file;
            insertFile(newFile.originalname, newFile.path/*, newFile.id_pedido*/);
            console.log(req.file)
            res.send('Arquivo enviado com sucesso')
        } else {
            res.status(400).send('Arquivo não encontrado na requisição');
        };
    };

    deleteFiles = async (req: Request, res: Response) => {
        try{
            const {id} = req.params;
            await deleteFile(id);
            console.log('deletado');
            return res.status(200).json({ message: `Imagem com ID ${id} deletado com sucesso!` });
        } catch(err: any){
            console.error('Erro ao deletar pedido:', err.message);
            return res.status(500).json({ error: 'Erro ao deletar pedido. ' + err.message });
        };
    };
};
  