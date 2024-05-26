import { asyncHandler } from "../utils/asyncHandler.js";
import { Order } from '../models/order.model.js';
import { Product } from "../models/product.model.js";
import { ApiResponse } from "../utils/ApiResonse.js";
import { ApiError } from "../utils/ApiError.js";

const createOrder = asyncHandler(async (req, res) => {
  const { user, body: { orderItems } } = req;

  if (!orderItems || !orderItems.length) {
    return res
      .status(400)
      .json(new ApiError(400, "Order items are required"));
  }

  let totalOrderPrice = 0;
  const orderItemsWithDetails = await Promise.all(orderItems.map(async item => {
    const product = await Product.findById(item.productId);
    if (!product) {
      throw new Error(`Product with ID ${item.productId} not found`);
    }
    const itemPrice = product.price * item.quantity;
    totalOrderPrice += itemPrice;

    return {
      ...item,
      name: product.name,
      price: product.price,
      productImage: product.productImage,
      total: itemPrice
    };
  }));

  const order = new Order({
    customer: user._id,
    orderItems: orderItemsWithDetails,
    orderPrice: totalOrderPrice
  });

  const createdOrder = await order.save();

  return res
    .status(201)
    .json(new ApiResponse(201, createdOrder, "New Order is Added!!"));
});

const getOrderHistory = asyncHandler(async(req,res)=>{

  const { user } = req;

  const orders = await Order.find({customer: user._id}).sort({createdAt: -1});

  return res
  .status(200)
  .json(
    new ApiResponse(200, orders, "Order History!!")
  );
})

const getOrderById = asyncHandler(async(req, res)=>{
    const order = await Order.findById(req.params.id);

    if(!order){
        throw new ApiError(404, "Order not found!!");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, order, "Order found!!")
    );
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
    
    return res
    .status(200)
    .json(
        new ApiResponse(200, order , 'Order deleted successfully')
    );
})


export {createOrder, getOrderHistory, getOrderById, updateOrderById, deleteOrderById};