import Router from 'express';
import { UserController } from '../controllers/userControllers';

export const userRouter = Router();

const userController = new UserController;

userRouter.get('/user', userController.getUser);
userRouter.post('/users', userController.createUser);
userRouter.put('/user/:id', userController.updateUser);
userRouter.get('/user/:id', userController.getSingleUser);
userRouter.delete('/user/:id', userController.deleteUser);
userRouter.post('/user', userController.loginUser);
