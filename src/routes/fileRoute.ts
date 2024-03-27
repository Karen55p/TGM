import { Router } from 'express';
import { FileController } from '../controllers/fileControllers'
import multer from 'multer';
import express from 'express';

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

//fileRouter.get('/uploads/:id', multerMiddleware, fileController.getSingleFile);
fileRouter.post('/upload', multerMiddleware, fileController.createFile);
fileRouter.get('/aaa', multerMiddleware, express.static('uploads'));

