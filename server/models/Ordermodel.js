import mongoose from "mongoose";

const Schema = mongoose.Schema;
const OrderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    OrderedList: [
      {
        Name: {
          type: String,
          required: true,
        },
        Img: {
          type: String,
          required: true,
        },
        CountInstock: {
          type: Number,
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        },
        Price: {
          type: Number,
          required: true,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    Shippingaddress: {
      name: { type: String },
      address: { type: String },
      states: { type: String },
      zipcode: { type: String },
      city: { type: String },
    },
    payment: {
      type: "String",
    },

    tax: {
      type: "Number",
      required: true,
    },
    shippingprice: {
      type: "Number",
      required: true,
    },
    totalprice: {
      type: "Number",
      required: true,
    },
    IsPaid: {
      type: "Boolean",
      default: true,
      required: true,
    },
    paiddate: {
      type: Date,
    },
    IsDelivered: {
      type: "Boolean",
      default: false,
      required: true,
    },
    delivereddate: {
      type: Date,
    },
  },

  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;
