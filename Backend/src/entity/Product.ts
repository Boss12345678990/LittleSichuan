import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("Product")
export default class Product {

    @PrimaryGeneratedColumn()
    productId: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @Column()
    photo: string

    @Column()
    type: string

}