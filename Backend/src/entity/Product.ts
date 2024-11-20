import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, ManyToOne,CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import ProductAndOrder from "./product-order";

@Entity("product")
export default class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255})
    name: string;

    @Column({type: 'varchar', nullable: true})
    description: string;

    @Column({type:"decimal"})
    price: number;

    @Column({type:"varchar"})
    photo: string;

    @Column({type:"varchar"})
    type: string;

    @DeleteDateColumn({nullable: true})
    deletedAt: Date;

    @CreateDateColumn({nullable: true})
    createdAt: Date;

    @UpdateDateColumn({nullable: true})
    updatedAt: Date;    

    @OneToMany(()=>ProductAndOrder, (product_order) => product_order.products)
    productOrder: ProductAndOrder[];
}