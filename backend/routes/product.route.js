import express from 'express';
import { bestProducts, createProduct, updateProduct, deleteProduct, getProduct, getProductByCategory } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/best-products', bestProducts);
router.post('/create', createProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/:id', getProduct);
router.get('/get-by-category/:category', getProductByCategory);


export default router;