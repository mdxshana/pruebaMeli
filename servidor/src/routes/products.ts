import express from "express";
import productController from "../controllers/produts";

const router = express.Router();

router.get("/items", productController.getProducts);
router.get("/items/:id", productController.getProduct);

export default router;
