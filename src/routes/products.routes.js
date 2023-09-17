import { Router } from "express";
import { getProducts, getProduct, deleteProduct, updateProduct, c, createProduct
 } from "../controllers/product.controller";

const router = Router();


router.get('/products', getProducts)

router.post('/products', createProduct)

router.get('products/:id', getProduct)

router.put('/products/:id', updateProduct)

router.delete('/products/:id', deleteProduct)


export default router;
