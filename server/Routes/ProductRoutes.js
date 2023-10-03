import express from "express";
const router = express.Router();
import {
  deleteproduct,
  getProduct,
  getProducts,
  updatedproduct,
  createproduct,
  updatetheproduct,
  newproduct,
} from "../controllers/ProductControllers.js";
import { protectede, admin } from "../middleware/Authentication.js";

router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/edit/:id", updatedproduct);
router.delete("/delete/:id", protectede, admin, deleteproduct);
router.put("/update/:id", protectede, admin, updatetheproduct);
router.post("/create", protectede, admin, createproduct);

export default router;
