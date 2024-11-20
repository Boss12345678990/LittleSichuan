import productService from "../services/productService";
import { Request, Response } from "express";

const productservice = new productService();

const getAllProduct = async (req: Request, res: Response) => {
    try{
        const allProduct = await productservice.getAllProduct();
        res.status(200).json(allProduct);
    }
    catch(error){
        res.status(500).send(error.message);
    }
}
const getProductById = async (req: Request, res: Response) => {
    try{
        const id = parseInt(req.params.id);
        if(isNaN(id)){
            res.status(404).json({message:"Invalid Product Id"});
        }
        const product = await productservice.getProductById(id);
        if(product){
            res.status(200).json(product);
        }else{
            res.status(404).json({ message:"Product not found"});
        }
    }
    catch(error){
        res.status(500).send(error.message);
    }
}
const createProduct = async (req: Request, res: Response) => {
    try{
        const content = req.body;
        if(!content.name || !content.photo || content.price < 0 || !content.type){
            res.status(404).json({message:"Invalid Input Data"});
        }
        const newProduct = await productservice.createProduct(content);
        res.status(200).json(newProduct);
    }
    catch(error){
        res.status(500).send(error.message);
    }
}
const updateProductById = async (req: Request, res: Response) => {
    try{
        const id = parseInt(req.params.id);
        const body = req.body;
        if(isNaN(id)){
            res.status(404).json({message:"Invalid Product Id"});
        }
        await productservice.updateProductById(id, body);
        res.status(200).json({message:"Product Update Successfully"});
    }
    catch(error){
        res.status(500).send(error.message);
    }
}
const deleteById = async (req: Request, res: Response) => {
    try{
        const id = parseInt(req.params.id);
        await productservice.deleteProductById(id);
        res.status(200).json({message:"Product Delete Successfully"});
    }
    catch(error){
        res.status(500).send(error.message);
    }
}

export {getAllProduct, getProductById, createProduct, updateProductById, deleteById};