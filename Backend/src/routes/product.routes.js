import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import 
{   createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById
 } from "../controllers/product.controllers.js";

const router = Router();

router.use(verifyJWT);

router.route('/add').post(createProduct); 
router.route('/getProducts').get(getProducts);     
router.route('/getProduct/:id').get(getProductById); 
router.route('/updateProduct/:id').put(updateProductById); 
router.route('/remove/:id').delete(deleteProductById);

export default router;