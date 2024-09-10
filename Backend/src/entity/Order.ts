import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"

@Entity("Order")
export default class Order {

    @PrimaryGeneratedColumn()
    orderId: number

    @Column()
    phoneNumber: number

    @Column("decimal")
    totalPrice: number

}
