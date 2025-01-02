import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema({
  //here, we have made this schema just to use it in orderschema , ww will not export this schema, but we can export this //if we want

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [orderItemsSchema], //if we dont want to create new orderItemSchema , then we have to write ---
      /*
type:[{
productId:{
type: mongoose.Schema.Types.ObjectId,
ref:"Product"
  },
quantity:{
type:Number,
required: true
   } 
 }
]
  */
    },

    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'], //enumeration --- status value can be pending,cancelled or delivered , other value is not accepted in status
      default: 'PENDING',
    },
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.Schema('Order', orderSchema);
