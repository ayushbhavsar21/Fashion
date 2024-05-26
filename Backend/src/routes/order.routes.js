import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import 
{ 
    createOrder,
    deleteOrderById, 
    getOrderById, 
    getOrderHistory, 
    updateOrderById 
    
} from "../controllers/order.controllers.js";

const router = Router();

router.use(verifyJWT);

router.route('/add').post(createOrder); 
router.route('/getOrders').get(getOrderHistory);     
router.route('/getOrder/:id').get(getOrderById); 
router.route('/updateOrder/:id').put(updateOrderById); 
router.route('/remove/:id').delete(deleteOrderById);

export default router;