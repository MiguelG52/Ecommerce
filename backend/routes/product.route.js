import express from 'express';
import { getAllProducts, createProduct, updateProduct, deleteProduct, getProduct, getProductByCategory } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/get-all', getAllProducts);
router.post('/create', createProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/get/:id', getProduct);
router.get('/get-by-category/:category', getProductByCategory);


export default router;