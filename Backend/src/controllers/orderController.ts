import orderService from "../services/orderService";
import { Request, Response} from "express";

const orderservice = new orderService();

const getAllOrder = async (req: Request, res: Response) => {
    try{
        const allOrder = await orderservice.getAllOrder();
        res.status(200).json(allOrder);
    }
    catch(error){
        res.status(500).send(error.message);
    }
}
const getOrderById = async (req: Request, res: Response) => {
    try{
        const id = parseInt(req.params.id);
        if(isNaN(id)){
            res.status(404).json({message:"Invalid Order Id"});
        }
        const Order = await orderservice.getOrderById(id);
        if(Order){
            res.status(200).json(Order);
        }else{
            res.status(404).json({ message:"Order not found"});
        }
    }
    catch(error){
        res.status(500).send(error.message);
    }
}
const createOrder = async (req: Request, res: Response) => {
    try{
        const content = req.body;
        const newOrder = orderservice.createOrder(content);
        res.status(200).json(newOrder);
    }
    catch(error){
        res.status(500).send(error.message);
    }
}
const updateOrderByPhoneNumber = async (req: Request, res: Response) => {
    try{
        const { orderItems } = req.body;
        const id  = parseInt(req.params.id);
        await orderservice.updateOrderById(id, orderItems);
        res.status(200).json({message: "Order Update Successfully"});
    }
    catch(error){
        res.status(500).send(error.message);
    }
}
const  deleteOrderByPhoneNumber = async (req: Request, res: Response) => {
    try{
        const id  = parseInt(req.params.id);
        await orderservice.deleteOrderById(id);
        res.status(200).json({message: "Order Delete Successfully"});
    }
    catch(error){
        res.status(500).send(error.message);
    }
}
export {getAllOrder, getOrderById, createOrder, updateOrderByPhoneNumber, deleteOrderByPhoneNumber}