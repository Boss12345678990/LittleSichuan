import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import ProductAndOrder from "./product-order";

@Entity("order")
export default class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar"})
    phoneNumber: number;

    @Column("decimal")
    totalPrice: number;

    @Column("json")
    orderItems: any;

    @DeleteDateColumn({nullable: true})
    deletedAt: Date;

    @CreateDateColumn({nullable: true})
    createdAt: Date;

    @UpdateDateColumn({nullable: true})
    updatedAt: Date;

    @OneToMany(()=>ProductAndOrder, (product_order) =>product_order.orders)
    productOrder: ProductAndOrder;
}
