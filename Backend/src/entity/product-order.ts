import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import Product from "./Product";
import Order from "./Order";

@Entity("product_order")
export default class ProductAndOrder {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "int"})
    orderId: number;

    @ManyToOne(() => Order, (order) => order.productOrder)
    @JoinColumn()
    orders: Order;

    @Column({type: "int"})
    productId: number;

    @ManyToOne(() => Product, (product) =>product.productOrder)
    @JoinColumn()
    products: Product;

    @CreateDateColumn({nullable: true})
    createdAt: Date;

    @UpdateDateColumn({nullable: true})
    updatedAt: Date; 
}