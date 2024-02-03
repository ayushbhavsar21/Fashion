import { asyncHandler } from "../utils/asyncHandler";
import { Order } from '../models/order.model';
import { ApiResponse } from "../utils/ApiResonse";
import { ApiError } from "../utils/ApiError";

const createOrder = asyncHandler(async(req,res)=>{
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(new ApiResponse(201, order, "Order is added!!"))
})

const getOrders = asyncHandler(async(req,res)=>{

    const orders = await Order.find();
    req.status(200).json(new ApiResponse(200, orders, 'Orders found!!')) 

})

const getOrderById = asyncHandler(async(req, res)=>{
    const order = await Order.findById(req.params.id);

    if(!order){
        throw new ApiError(404, "Order not found!!");
    }

    res.status(200).json(new ApiResponse(200, order, "Order found!!"));
})

const updateOrderById = asyncHandler(async(req,res)=>{
    const { id } = req.params;
    const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
    if (!order) {
        throw new ApiError(404, 'Order not found');
    }
    res.status(200).json(new ApiResponse(200, order , "Order Updated!!"));
})

const deleteOrderById = asyncHandler(async(req,res)=>{
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
        throw new ApiError(404, 'Order not found');
    }
    res.status(200).json(200, order , 'Order deleted successfully');
})


export {createOrder, getOrders, getOrderById, updateOrderById, deleteOrderById};