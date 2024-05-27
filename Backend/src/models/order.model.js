import {Schema, model} from 'mongoose'

const orderItemSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productImage: {
    type: String,
  }
})

const orderSchema = new Schema({
  orderPrice:{
    type: Number,
    required: true
  },
  customer:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  orderItems:{
    type:[orderItemSchema]
  },
  status: {
    type: String,
    enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
    default: 'PENDING',
  },
  date: {
    type: String,
    required: true
  }
},{timestamps: true})

export const Order = model("Order", orderSchema)