import { Router } from 'express';
import { FileController } from '../controllers/fileControllers'
import multer from 'multer';

import { Request, Response, NextFunction } from 'express';

export const fileRouter = Router();

const fileController = new FileController;

const upload = multer({ dest: './src/upload' });

const multerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    upload.single('file')(req, res, (err: any) => {
      if (err) {
        return res.sendStatus(500);
      }
      next();
    });
  };

fileRouter.get('/uploads/:id', fileController.getSingleFile);
fileRouter.post('/upload', multerMiddleware, fileController.createFile);
fileRouter.delete('/upload/:id', fileController.deleteFiles);
//fileRouter.get('/aaa', multerMiddleware, express.static('uploads'));