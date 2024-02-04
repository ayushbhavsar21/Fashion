import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware";
import 
{ 
    createOrder,
    deleteOrderById, 
    getOrderById, 
    getOrders, 
    updateOrderById 
    
} from "../controllers/order.controllers";

const router = Router();

router.use(verifyJWT);

router.route('/add').post(createOrder); 
router.route('/getOrders').get(getOrders);     
router.route('/getOrder/:id').get(getOrderById); 
router.route('/updateOrder/:id').put(updateOrderById); 
router.route('/remove/:id').delete(deleteOrderById);

export default router;