import { Router } from "express";
import {
    getAllProduct,
    getProductById,
    createProduct,
    updateProductById,
    deleteById
} from "../controllers/productController";

const productRouter = Router();

productRouter.get("/product", getAllProduct);
productRouter.get("/product/:id", getProductById);
productRouter.post("/product", createProduct);
productRouter.put("/product/:id", updateProductById);
productRouter.delete("/product/:id", deleteById);

export default productRouter;