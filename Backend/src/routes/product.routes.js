import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import 
{   createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById
} from "../controllers/product.controllers.js";

import {upload} from '../middlewares/multer.middleware.js';

const router = Router();

router.use(verifyJWT);

router.route('/add').post(
    upload.fields({
        name: "productImage",
        maxCount: 1
    })
    ,createProduct); 
router.route('/getProducts').get(getProducts);     
router.route('/getProduct/:id').get(getProductById); 
router.route('/updateProduct/:id').put(updateProductById); 
router.route('/remove/:id').delete(deleteProductById);

export default router;