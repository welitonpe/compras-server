import Router from 'express';
import ProductController from '../controller/ProductController';

const productController = new ProductController();

export const routes = Router();

// Product Routes
routes.get('/products', productController.index);
routes.post('/products', productController.store);
routes.put('/products/:id', productController._update);
routes.delete('/products/:id', productController._delete);
