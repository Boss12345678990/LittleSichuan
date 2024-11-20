import { Router } from "express";
import {
    getAllOrder,
    getOrderById,
    createOrder, 
    updateOrderByPhoneNumber, 
    deleteOrderByPhoneNumber
} from "../controllers/orderController";

const orderRouter = Router();
orderRouter.get("/order", getAllOrder);
orderRouter.get("/order/:id", getOrderById);
orderRouter.post("/order", createOrder);
orderRouter.put("/order", updateOrderByPhoneNumber);
orderRouter.delete("/order", deleteOrderByPhoneNumber);

export default orderRouter;