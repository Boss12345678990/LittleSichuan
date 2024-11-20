import { AppDataSource } from "../data-source";
import Product from "../entity/Product";
import Order from "../entity/Order";
import ProductAndOrder from "../entity/product-order";
const productRepository = AppDataSource.getRepository(Product);
const orderRepository = AppDataSource.getRepository(Order);
const productAndOrderRepository = AppDataSource.getRepository(ProductAndOrder);
export {productRepository, orderRepository, productAndOrderRepository};