import mongoose from "mongoose";
import dummy from "mongoose-dummy";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    Name: {
      type: String,
      required: true,
    },
    Img: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Brand: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    CountInStock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
// let randomObject = dummy(Product, {
//     returnDate: true
// })
// console.log(randomObject);
export default Product;
