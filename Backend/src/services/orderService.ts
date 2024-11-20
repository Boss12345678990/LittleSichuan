import { orderRepository, productAndOrderRepository } from "../utils/Repo";
import Order from "../entity/Order";
import ProductAndOrder from "../entity/product-order";
export default class orderService{
    async getAllOrder(): Promise<Order[]>{
        return await orderRepository.find({relations: ["productOrder"], where:{deletedAt:null}});
    }
    async getOrderById(id:number): Promise<Order>{
        return await orderRepository.findOne({relations: ['productOrder'], where:{id: id}});
    }
    async createOrder(body: Order): Promise<Order>{
        const { totalPrice, phoneNumber, orderItems} = body;
        const newOrder = new Order();
        newOrder.orderItems = orderItems;
        newOrder.phoneNumber = phoneNumber;
        newOrder.totalPrice = totalPrice;
        await orderRepository.save(newOrder);
        
        const productOrders = orderItems.map((item) => {
            const productAndOrder = new ProductAndOrder();
            productAndOrder.orderId = newOrder.id;
            productAndOrder.productId = item.productId;
            return productAndOrder;
        });
        await productAndOrderRepository.save(productOrders); 

        return newOrder;
    }
    async updateOrderById(id:number, updatefield: Partial<Order>){
        await orderRepository.update({id: id}, updatefield);
        const orderToUpdate = await orderRepository.findOne({where: {id: id}});
        return orderToUpdate;
    }
    async deleteOrderById(id:number){
        const delteOrder = await orderRepository.findOne({where: {id: id}});
        if(delteOrder){
            const time = new Date();
            delteOrder.deletedAt = time;
            await orderRepository.save(delteOrder);
        }
        else{
            throw new Error("Order not found");
        }
    }
}